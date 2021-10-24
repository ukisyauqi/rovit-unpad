import React, { useContext, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Text,
  Divider,
  Spacer,
  Checkbox,
  Grid,
  GridItem,
  CheckboxGroup,
  Select,
} from "@chakra-ui/react";
import { BlackButton, ItemDrawer, MyCheckbox } from "../components";
import { AppContext } from "../contextProvider";

export default function Administration() {
  const { hrChecked, osChecked, btChecked, bpChecked } = useContext(AppContext);
  return (
    <Flex height="calc(100vh - 85px)">
      <Box w="44%" pt="10px">
        <Box
          w="80%"
          bg="#23464C"
          borderRadius="10px"
          boxShadow="0px 0px 10px 10px rgba(0,0,0,0.5), 0px 0px 0px 8px #448894"
          position="relative"
          left="-20"
        >
          <Text fontSize="2xl" align="right" pr="30px">
            Set The Location Patient's Bed
          </Text>
        </Box>

        <Box pt="20px" pr="20px" h="calc(100vh - 132px)">
          <Box bg="gray" h="100%"></Box>
        </Box>
      </Box>

      <Box w="28%" mr="10px" mt="66px">
        <Box bg="#23464C" borderBottomRadius="10px" h="280px">
          <Box bg="#162D31" borderBottomRadius="20px">
            <Text py="10px" pl="20px" fontSize="xl" fontWeight="bold">
              QUEUE
            </Text>
          </Box>
          <Box
            mx="20px"
            my="10px"
            py="5px"
            px="10px"
            borderRadius="10px"
            bg="#373F40"
          >
            <Text>PATIENT A</Text>
          </Box>
          <Box
            mx="20px"
            my="10px"
            py="5px"
            px="10px"
            borderRadius="10px"
            bg="#373F40"
          >
            <Text>PATIENT B</Text>
          </Box>
        </Box>

        <Box
          align="right"
          position="relative"
          top="-60px"
          transform="scale(0.8)"
        >
          <BlackButton text="Reset Queue" />
        </Box>

        <Box
          position="relative"
          top="-50px"
          mt="20px"
          bg="#23464C"
          borderBottomRadius="10px"
          h="calc(100vh - 450px)"
        >
          <Box bg="#162D31" borderBottomRadius="20px">
            <Text py="10px" pl="20px" fontSize="xl" fontWeight="bold">
              ROBOT CONDITION
            </Text>
          </Box>
          <Box>
            <Divider mt="5px" />
            <Text color="#DADADA" align="center" fontSize="small">
              Date: 25 Nov 2021 &nbsp;&nbsp;|&nbsp;&nbsp; Location: RS Hasan
              Sadikin
            </Text>
            <Divider />
            <Flex
              px="20px"
              mt="10px"
              h="calc(100vh - 553px)"
              direction="column"
              justify="space-evenly"
            >
              <Flex>
                <Text>Battery Percentage</Text>
                <Spacer />
                <Text>80%</Text>
              </Flex>
              <Flex>
                <Text>Internet Connection</Text>
                <Spacer />
                <Text>Good</Text>
              </Flex>
              <Flex>
                <Text>Navigation System Status</Text>
                <Spacer />
                <Text>Ready</Text>
              </Flex>
              <Flex>
                <Text>Biosignal System Status</Text>
                <Spacer />
                <Text>Ready</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box w="28%" ml="10px" pt="10px">
        <Box
          w="100%"
          bg="#23464C"
          borderRadius="10px"
          boxShadow="0px 0px 10px 10px rgba(0,0,0,0.5), 0px 0px 0px 8px #448894"
          position="relative"
          left="20"
        >
          <Text fontSize="2xl" align="left" pl="30px">
            Give Order
          </Text>
        </Box>
        <Box pt="20px" h="calc(100vh - 130px)">
          {/* Box Give Order */}
          <Box h="100%">
            <Box bg="#323232" border="10px solid #23464C">
              <Text fontSize="xl" fontWeight="bold" pl="10px">
                Medical Check-Up
              </Text>
            </Box>

            <Box pl="40px" pt="10px" pb="10px">
              <MyCheckbox isChecked={hrChecked} text="Heart Rate Checking" />
              <br />
              <MyCheckbox
                isChecked={osChecked}
                text="Oxygen Saturation Checking"
              />
              <br />
              <MyCheckbox
                isChecked={btChecked}
                text="Body Temperatur Checking"
              />
              <br />
              <MyCheckbox
                isChecked={bpChecked}
                text="Blood Pressure Checking"
              />
              <br />
            </Box>

            <Box bg="#323232" border="10px solid #23464C">
              <Text fontSize="xl" fontWeight="bold" pl="10px">
                Items
              </Text>
            </Box>

            <Box
              bg="#23464C"
              h="calc(100vh - 395px)"
              mt="10px"
              ml="20px"
              borderRadius="10px"
              pt="1px"
            >
              <Grid
                templateRows="repeat(3, 1fr)"
                h="100%"
                fontSize="sm"
                pb="10px"
              >
                {/* tabel */}
                <GridItem rowSpan="1">
                  <Box borderRadius="5px" m="5px" bg="#323232">
                    <Text fontWeight="bold" py="5px" px="10px">
                      Upper Drawer
                    </Text>
                  </Box>
                  <Grid h="50%" templateColumns="repeat(3, 1fr)" px="10px">
                    <Box pt="2px" w="100%" borderRight="1px solid silver">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                    <Box pt="2px" w="100%" borderRight="1px solid silver">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                    <Box pt="2px" w="100%">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                  </Grid>
                </GridItem>

                {/* tabel */}
                <GridItem rowSpan="1">
                  <Box borderRadius="5px" m="5px" bg="#323232">
                    <Text fontWeight="bold" py="5px" px="10px">
                      Middle Drawer
                    </Text>
                  </Box>
                  <Grid h="50%" templateColumns="repeat(3, 1fr)" px="10px">
                    <Box pt="2px" w="100%" borderRight="1px solid silver">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                    <Box pt="2px" w="100%" borderRight="1px solid silver">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                    <Box pt="2px" w="100%">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                  </Grid>
                </GridItem>

                {/* tabel */}
                <GridItem rowSpan="1">
                  <Box borderRadius="5px" m="5px" bg="#323232">
                    <Text fontWeight="bold" py="5px" px="10px">
                      Lower Drawer
                    </Text>
                  </Box>
                  <Grid h="50%" templateColumns="repeat(3, 1fr)" px="10px">
                    <Box pt="2px" w="100%" borderRight="1px solid silver">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                    <Box pt="2px" w="100%" borderRight="1px solid silver">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                    <Box pt="2px" w="100%">
                      <ItemDrawer />
                      <ItemDrawer />
                    </Box>
                  </Grid>
                </GridItem>
                {/* end tabel */}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
