import React from 'react'
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
    Button
} from "@chakra-ui/react";
import imgBtnController from '../assets/btn.jpg'
import imgBtnStop from '../assets/stop.png'
import "./Navigation.css"

export default function Navigation() {
    return (
        <Flex align="center">
            <Box mr="8px" height="calc(100vh - 85px)" flex="1" >
                <Box bg="#23464C" borderRadius="10px" padding="40px"
                    boxShadow="inset 0px 0px 3px 0px #000000" height="70%">

                </Box>
            </Box>

            <Box ml="8px" height="calc(100vh - 85px)" bg="#23464C" flex="1" borderRadius="10px" px="20px" py="10px"
                boxShadow="inset 0px 0px 3px 0px #000000">
                <Center>
                    <Text fontSize="4xl">Manual Control</Text>
                </Center>

                <Flex>
                    <Box mt="50px">
                        <Center>
                            <Text fontSize="2xl" mb="20px">Movement Control</Text>
                        </Center>

                        <Box width="400px" height="400px">
                            <Controller />
                        </Box>
                    </Box>
                    <Box flex="1" ></Box>
                </Flex>
            </Box>


        </Flex>
    )
}

const BlackButton = () => (
    <>
        test
    </>
)

const Controller = () => (
    <Center>
        <Box>
            <Center>
                <button className="btn-controller"><Image src={imgBtnController} alt="controller"></Image></button>
            </Center>
            <Flex>
                <button className="btn-controller" style={{ transform: "rotate(-90deg)", position: "relative", left: -30 }}>
                    <Image zIndex="-1" src={imgBtnController} alt="controller"></Image>
                </button>
                <Flex height="132" justify="center" align="center">
                    <button className="btn-controller" style={{ height: "100px" }}>
                        <Image src={imgBtnStop} alt="stop"></Image>
                    </button>
                </Flex>
                <button className="btn-controller" style={{ transform: "rotate(90deg)", position: "relative", left: 30 }}>
                    <Image src={imgBtnController} alt="controller"></Image>
                </button>
            </Flex>
            <Center>
                <button className="btn-controller" style={{ transform: "rotate(180deg)" }}>
                    <Image src={imgBtnController} alt="controller"></Image>
                </button>
            </Center>

        </Box>
    </Center>

)
