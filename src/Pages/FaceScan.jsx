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
  Progress,
  Text,
  Image
} from "@chakra-ui/react";

import ImgSami from "../assets/sami.png"

export default function FaceScan() {
  return (
    <Box height="calc(100vh - 85px)">
      <Center w="100%">
        <Image
          w="350px"
          h="350px"
          borderRadius="50%"
          mt="60px"
          boxShadow="0px 0px 0px 10px rgba(0,0,0,1), 0px 0px 0px 50px #FF0000;"
          overflow="hidden"
          src={ImgSami}
          objectFit="cover"
        >
          
        </Image>
      </Center>
      <Center mt="50px" h="calc(100vh - 526px)">
        <Progress
          borderRadius="50px"
          width="50%"
          value={70}
          height="50px"
          colorScheme="red"
        />
      </Center>
      <Center w="100px" h="100px" position="absolute" top="36%" left="14%">
        <Text align="center" fontWeight="bold" fontSize="5xl">Patient's Face Recognition</Text>
      </Center>
    </Box>
  );
}
