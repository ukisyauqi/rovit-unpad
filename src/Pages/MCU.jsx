import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Center,
  Text,
  Grid,
  GridItem,
  Image,
  useToast,
} from "@chakra-ui/react";
import { BlackButton } from "../components";
import ImgSami from "../assets/sami.png";
import { AppContext } from "../contextProvider";
import { Line } from "react-chartjs-2";

export default function MCU() {
  const { setHrChecked, setOsChecked, setBtChecked, setBpChecked } =
    useContext(AppContext);
  const [textStartOrStop, setTextStartOrStop] = useState("Start Procedur MCU");
  const [isBtnMcuLoading, setIsBtnMcuLoading] = useState(false);
  const isReading = useRef(false);
  const toast = useToast();
  const toastIdRef = React.useRef();

  const [hr0, sethr0] = useState("");
  const [hr1, sethr1] = useState("");
  const [hr2, sethr2] = useState("");
  const [hr3, sethr3] = useState("");
  const [hr4, sethr4] = useState("");
  const [hr5, sethr5] = useState("");
  const [hr6, sethr6] = useState("");
  const [hr7, sethr7] = useState("");

  const [os0, setos0] = useState("");
  const [os1, setos1] = useState("");
  const [os2, setos2] = useState("");
  const [os3, setos3] = useState("");
  const [os4, setos4] = useState("");
  const [os5, setos5] = useState("");
  const [os6, setos6] = useState("");
  const [os7, setos7] = useState("");

  const [bt0, setBt0] = useState("");
  const [bt1, setBt1] = useState("");
  const [bt2, setBt2] = useState("");
  const [bt3, setBt3] = useState("");
  const [textBPSYS, setTextBPSYS] = useState(["", "", "", ""]);
  const [textBPDIA, setTextBPDIA] = useState(["", "", "", ""]);

  const App = {
    btArr: [],
    osArr: [],
    hrArr: [],
  };

  async function doMedCheckUp() {
    setIsBtnMcuLoading(true);
    clearDisplayedMCUData();
    try {
      App.port = await navigator.serial.requestPort();
      await App.port.open({ baudRate: 9600 });
      App.reader = await App.port.readable.getReader();
      let value,
        startTime,
        endTime,
        readerData,
        result = "",
        bufferTextBT = ["", "", "", ""],
        bufferTextOS = ["", "", "", "", "", "", "", ""],
        bufferTextHR = ["", "", "", "", "", "", "", ""],
        hrValue,
        osValue,
        btValue;

      setIsBtnMcuLoading(false);
      setTextStartOrStop("Stop Procedur MCU");

      toastIdRef.current = toast({
        description: "Initializing...",
        duration: null,
      });
      setTimeout(() => {
        toast.update(toastIdRef.current, {
          description: "Dekatkan dan arahkan sensor suhu ke dahi",
          duration: null,
        });
      }, 2000);

      while (isReading.current) {
        startTime = performance.now();
        readerData = await App.reader.read();
        value = uint8arrayToString(readerData.value).toString();
        endTime = performance.now();

        if (endTime - startTime < 20) {
          //mengkoreksi data serial
          result += value;
        } else {
          console.log(result); // result = satu baris data serial

          // USE RESULT HERE (start)

          if (result.includes("OBJECT")) {
            App.MCUType = "BT";
          } else if (result.includes("HR")) {
            App.MCUType = "HR";
          }

          if (App.MCUType === "BT") {
            toast.update(toastIdRef.current, {
              description: "Mengukur suhu tubuh...",
              duration: null,
            });
            result = result.match(/\d\d.\d\d/g);
            try {
              btValue = result[1];
              bufferTextBT.push(btValue);
              bufferTextBT.shift();
              App.btArr.push(btValue);
            } catch {}

            setBt0(bufferTextBT[0]);
            setBt1(bufferTextBT[1]);
            setBt2(bufferTextBT[2]);
            setBt3(bufferTextBT[3]);
          }

          if (App.MCUType === "HR") {
            result = result.split(",");
            try {
              toast.update(toastIdRef.current, {
                description: "Mengukur Heart Rate dan kadar Oksigen...",
                duration: null,
              });
              hrValue = result[2].match(/\d+/g)[0];
              osValue = result[3].match(/\d+/g)[0];
              bufferTextHR.push(hrValue);
              bufferTextHR.shift();
              bufferTextOS.push(osValue);
              bufferTextOS.shift();

              if (hrValue !== "0") App.hrArr.push(hrValue);
              if (osValue !== "0") App.osArr.push(osValue);
            } catch {}

            sethr0(bufferTextHR[0]);
            sethr1(bufferTextHR[1]);
            sethr2(bufferTextHR[2]);
            sethr3(bufferTextHR[3]);
            sethr4(bufferTextHR[4]);
            sethr5(bufferTextHR[5]);
            sethr6(bufferTextHR[6]);
            sethr7(bufferTextHR[7]);

            setos0(bufferTextOS[0]);
            setos1(bufferTextOS[1]);
            setos2(bufferTextOS[2]);
            setos3(bufferTextOS[3]);
            setos4(bufferTextOS[4]);
            setos5(bufferTextOS[5]);
            setos6(bufferTextOS[6]);
            setos7(bufferTextOS[7]);
          }

          // USE RESULT HERE (end)

          result = value;
        }
      }
      toast.update(toastIdRef.current, {
        description: "Prosedur MCU telah selesai.",
        duration: 3000,
      });
      calculateMCUData();

      setHrChecked(true);
      setOsChecked(true);
      setBtChecked(true);
      setBpChecked(false);

      App.reader.releaseLock();
      await App.port.close();
      console.log("Read and Port Closed");
    } catch (err) {
      alert("Port sudah dibuka atau terjadi error pada port");
      setIsBtnMcuLoading(false);
      setTextStartOrStop("Start Procedur MCU");
      console.log(err);
    }
  }

  function calculateMCUData() {
    const average = (array) => array.reduce((a, b) => a + b) / array.length;

    console.log("os: " + App.osArr);
    console.log("hr: " + App.hrArr);
    console.log("bt: " + App.btArr);

    const osAvr =
      average(App.osArr.map((el) => parseInt(el))).toFixed(2) + " %";
    const hrAvr =
      average(App.hrArr.map((el) => parseInt(el))).toFixed(2) + " BPM";
    const btAvr =
      average(App.btArr.map((el) => parseFloat(el))).toFixed(2) +
      " " +
      String.fromCharCode(176) +
      "C";

    clearDisplayedMCUData();

    sethr0(hrAvr);
    setos0(osAvr);
    setBt0(btAvr);
  }

  function clearDisplayedMCUData() {
    sethr0("");
    sethr1("");
    sethr2("");
    sethr3("");
    sethr4("");
    sethr5("");
    sethr6("");
    sethr7("");

    setos0("");
    setos1("");
    setos2("");
    setos3("");
    setos4("");
    setos5("");
    setos6("");
    setos7("");

    setBt0("");
    setBt1("");
    setBt2("");
    setBt3("");
  }

  async function handleClickDoMCU(ev) {
    if (textStartOrStop === "Start Procedur MCU") {
      isReading.current = true;
      doMedCheckUp();
    } else {
      isReading.current = false;
      setIsBtnMcuLoading(false);
      setTextStartOrStop("Start Procedur MCU");
    }
  }
  function uint8arrayToString(uint8array) {
    return new TextDecoder("utf-8").decode(uint8array);
  }

  const data = {
    labels: ["","","","","","",""],
    datasets: [
      {
        label: "Heart Rate",
        data: [12, 19, 3, 5, 2, 3, 10],
        fill: false,
        backgroundColor: "#54D4BF",
        borderColor: "rgba(255, 255, 255)",
        color:"#ff0000"
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Flex h="calc(100vh - 85px)">
      <Flex w="400px" justify="center">
        <Box>
          <Center>
            <Image
              mt="40px"
              borderRadius="50%"
              w="200px"
              h="200px"
              src={ImgSami}
              objectFit="cover"
            ></Image>
          </Center>
          <Box align="center" mt="20px">
            <Text fontSize="3xl" fontStyle="italic">
              Patient Name
            </Text>
            <Text fontStyle="italic">Umur: 30 tahun</Text>
            <Text fontStyle="italic">Jenis Kelamin: Laki-Laki</Text>
          </Box>

          <Box w="400px" mt="100px" align="center">
            <BlackButton text="Hubungi Dokter" />

            <BlackButton
              text={textStartOrStop}
              mt="20px"
              onClick={handleClickDoMCU}
              isLoading={isBtnMcuLoading}
            />
          </Box>
        </Box>
      </Flex>

      <Flex
        p="20px"
        borderRadius="10px"
        my="20px"
        mr="20px"
        flex="1"
        bg="#23464C"
      >
        <Grid
          h="100%"
          w="calc(100% - 32px)"
          templateColumns="60% 1% 39%"
          rowGap="0"
          columnGap="4"
        >
          <GridItem colSpan={1}>
            <Flex direction="column" h="100%" justify="center">
              <Box flex="1" mb="10px">
                <Text fontSize="xl" fontWeight="light">
                  Heart Rate
                </Text>

                {/* baca serial */}
                <Flex align="center" h="86%" pl="30px">
                  {/* <Text fontFamily="consolas">
                    {hr0} <br />
                    {hr1} <br />
                    {hr2} <br />
                    {hr3} <br />
                    {hr4} <br />
                    {hr5} <br />
                    {hr6} <br />
                    {hr7} <br />
                  </Text> */}
                  <Box width="450px" height="200px">
                    <Line data={data} options={options} />
                  </Box>
                </Flex>
              </Box>
              <Box bg="white" h="5px" borderRadius="3px"></Box>
              <Box flex="1" pt="15px">
                <Text fontSize="xl" fontWeight="light">
                  Oxigen Saturation
                </Text>
                {/* baca serial */}
                <Flex align="center" h="85%" pl="30px">
                  <Text fontFamily="consolas">
                    {os0} <br />
                    {os1} <br />
                    {os2} <br />
                    {os3} <br />
                    {os4} <br />
                    {os5} <br />
                    {os6} <br />
                    {os7} <br />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </GridItem>

          <GridItem colSpan={1}>
            <Flex h="100%">
              <Box borderRadius="3px" w="5px" bg="white"></Box>
            </Flex>
          </GridItem>

          <GridItem colSpan={1}>
            <Flex direction="column" h="100%" justify="center">
              <Box flex="1">
                <Text fontSize="xl" fontWeight="light">
                  Body Temperature
                </Text>
                {/* baca serial */}
                <Flex align="center" h="80%" pl="30px">
                  <Text fontFamily="consolas">
                    {bt0} <br />
                    {bt1} <br />
                    {bt2} <br />
                    {bt3} <br />
                  </Text>
                </Flex>
              </Box>
              <Box bg="white" h="5px" borderRadius="3px"></Box>
              <Box flex="1" pt="15px">
                <Text fontSize="xl" fontWeight="light">
                  Blood Presure (SYS)
                </Text>
                {/* baca serial */}
                <Flex align="center" h="80%" pl="30px">
                  <Text fontFamily="consolas">
                    {textBPSYS[0]} <br />
                    {textBPSYS[1]} <br />
                    {textBPSYS[2]} <br />
                    {textBPSYS[3]} <br />
                  </Text>
                </Flex>
              </Box>
              <Box bg="white" h="5px" borderRadius="3px"></Box>
              <Box flex="1" pt="15px">
                <Text fontSize="xl" fontWeight="light">
                  Blood Presure (DIA)
                </Text>
                {/* baca serial */}
                <Flex align="center" h="80%" pl="30px">
                  <Text fontFamily="consolas">
                    {textBPDIA[0]} <br />
                    {textBPDIA[1]} <br />
                    {textBPDIA[2]} <br />
                    {textBPDIA[3]} <br />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
