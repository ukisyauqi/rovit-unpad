import React from "react";
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
} from "@chakra-ui/react";
import { BlackButton } from "../components";

export default function Administration() {
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
        <Box bg="#23464C" borderBottomRadius="10px" h="300px">
          <Box bg="#162D31" borderBottomRadius="20px">
            <Text py="10px" pl="20px" fontSize="2xl">
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

        <Box align="right" position="relative" top="-60px" transform="scale(0.8)">
          <BlackButton text="Reset Queue" />
        </Box>

        <Box
          position="relative"
          top="-50px"
          mt="20px"
          bg="#23464C"
          borderBottomRadius="10px"
          h="calc(100vh - 470px)"
        >
          <Box bg="#162D31" borderBottomRadius="20px">
            <Text py="10px" pl="20px" fontSize="2xl">
              ROBOT CONDITION
            </Text>
          </Box>
          <Box px="20px">
            <Text color="#DADADA" align="center">
              Date: Nov 5 2021 &nbsp;&nbsp;|&nbsp;&nbsp; Location: RS Hasan
              Sadikin
            </Text>
            <Divider />
            <Flex
              mt="10px"
              h="calc(100vh - 570px)"
              direction="column"
              justify="space-evenly"
            >
              <Flex>
                <Text>Batery Percentage</Text>
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
          <Box bg="gray" h="100%"></Box>
        </Box>
      </Box>
    </Flex>
  );
}
