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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BlackButton } from "../components";

export default function MCU() {
  return (
    <Flex h="calc(100vh - 85px)">
      <Flex w="400px" justify="center">
        <Box>
          <Center>
            <Box
              mt="40px"
              borderRadius="50%"
              w="200px"
              h="200px"
              bg="darkgreen"
            ></Box>
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

            <BlackButton text="Ulangi Prosedur MCU" mt="20px" />
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
          w="100%"
          templateColumns="370px auto 370px"
          rowGap="0"
          columnGap="4"
        >
          <GridItem colSpan={1}>
            <Flex direction="column" h="100%" justify="center">
              <Box flex="1">kiri atas</Box>
              <Box bg="white" h="5px" borderRadius="3px"></Box>
              <Box flex="1" pt="15px">kiri bawah</Box>
            </Flex>
          </GridItem>

          <GridItem colSpan={1} >
            <Flex h="100%">
              <Box borderRadius="3px" w="5px" bg="white"></Box>
              <Box w="100%" px="15px">tengah</Box>
              <Box borderRadius="3px" w="5px" bg="white"></Box>
            </Flex>
          </GridItem>

          <GridItem colSpan={1}>
            <Flex direction="column" h="100%" justify="center">
              <Box flex="1">kanan atas</Box>
              <Box bg="white" h="5px" borderRadius="3px"></Box>
              <Box flex="1" pt="15px">kanan bawah</Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
