import React from "react";
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
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { BlackButton, Controller, SpeedController } from "../components";

export default function Navigation() {
  return (
    <Flex align="center">
      <Box mr="8px" height="calc(100vh - 85px)" flex="1">
        <Box
          bg="#23464C"
          borderRadius="10px"
          padding="40px"
          boxShadow="inset 0px 0px 3px 0px #000000"
          height="70%"
        >
          <Text fontSize="3xl">Navigation Status</Text>
          <hr></hr>

          <Flex fontSize="xl" pt="20px">
            <Box>
              <Text>Lidar System Status</Text>
              <Text>Motor Speed</Text>
              <Text>Disturbance on the line</Text>
            </Box>
            <Spacer/>
            <Box>
              <Text>In Use</Text>
              <Text>5 m/s</Text>
              <Text>3</Text>
            </Box>
          </Flex>
        </Box>
        <Flex height="200px" align="center" pl="20px">
          <BlackButton text="Cancle Automation"/>
        </Flex>

      </Box>

      <Box
        ml="8px"
        height="calc(100vh - 85px)"
        bg="#23464C"
        flex="1"
        borderRadius="10px"
        px="20px"
        py="10px"
        boxShadow="inset 0px 0px 3px 0px #000000"
      >
        <Center>
          <Text fontSize="4xl">Manual Control</Text>
        </Center>

        <Flex>
          <Box mt="50px">
            <Center>
              <Text fontSize="2xl" mb="20px">
                Movement Control
              </Text>
            </Center>

            <Box width="400px" height="400px">
              <Controller />
            </Box>
          </Box>
          <Box flex="1" width="100px" height="400px">
            <SpeedController />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
