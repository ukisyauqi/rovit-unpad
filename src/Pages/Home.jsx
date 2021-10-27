import React from "react";
import { Box, Flex, Center, Text, Heading, Button, Img } from "@chakra-ui/react";
import gambarRobot from '../assets/robot.png'

export default function Home({ refLogin }) {
  return (
    <Flex
      height="calc(100vh - 45px)"
      bg="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,92,77,1) 27%, rgba(0,0,0,1) 68%);"
      m="-20px"
    >
      <Flex align="center" w="50%">
        <Box>
          <Heading
            fontWeight="400"
            textAlign="right"
            size="3xl"
            color="#65ffe6"
            textShadow="0 0 10px #fff"
          >
            MR-IAT Robot Covid
          </Heading>
          <br />
          <Heading pl="140px" ml="5px" fontWeight="400" fontSize="xl" textAlign="left" transform="scale(0.95)">
          Medical Robot - Controlled Intelligent Assisted Technology (MR-IAT) adalah produk robot untuk membantu penanganan COVID-19 di lingkungan rumah sakit yang dilengkapi dengan akuisisi data biosinyal, pemrosesan sinyal dan gambar, sistem vision, pemetaan, lokalisasi, dan intelligence control. 
          </Heading>
          <Button
            float="right"
            mt="10"
            width="100px"
            bg="linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%);"
            boxShadow="0px 0px 5px 1px teal"
            _hover={{ boxShadow: "0px 0px 5px 5px teal" }}
            _active={{ bg: "teal", boxShadow: "0px 0px 5px 10px teal" }}
            borderRadius="30px"
            px="100px"
            onClick={() => {
              refLogin.current.click();
            }}
          >
            Start The ROBOT
          </Button>
        </Box>
      </Flex>
      <Flex w="50%" align="center" justify="center">
        <Img src={gambarRobot} h="400px"></Img>
      </Flex>
    </Flex>
  );
}
