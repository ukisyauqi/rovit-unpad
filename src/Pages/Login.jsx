import React from 'react'
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Flex,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Center
} from "@chakra-ui/react";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


export default function Login() {
    return (
        <Flex justify="center" alignItems="center" height="calc(100vh - 85px)">
            <Flex width="600px" height="calc(100vh - 150px)" direction="column" >

                <Text align="center" fontSize="6xl" mb="10">Welcome To ROVIT!</Text>

                {/* Box Tengah */}
                <Box flex="1" width="auto" height="auto" bg="teal.700" borderRadius="10px" padding="40px"
                    boxShadow="inset 0px 0px 7px 0px #000000">

                    <Text fontSize="3xl" align="center" mb="10">Administration Authentication</Text>

                    {/* Username */}
                    <FormControl id="username" >
                        <FormLabel>Username</FormLabel>
                        <MyInput />
                    </FormControl>

                    {/* Password */}
                    <FormControl id="password" mt="10">
                        <FormLabel>Password</FormLabel>
                        <PasswordInput />
                    </FormControl>

                    {/* Button */}
                    <Center>
                        <Button mt='10' width="100px"
                            bg="linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%);"
                            boxShadow="0px 0px 5px 1px teal"
                            _hover={{ boxShadow: "0px 0px 5px 5px teal" }}
                            _active={{ bg: "teal", boxShadow: "0px 0px 5px 10px teal" }}>
                            Login
                        </Button>
                    </Center>

                    <Center>
                        <Button mt="2" bg="none" _hover={{ bg: "none", color: "turquoise" }} _click={{ bg: "none" }} _active={{ bg: "none" }}
                            _focus={{ bg: "none" }}>
                            Don't Have Account?
                        </Button>
                    </Center>
                </Box>
            </Flex>
        </Flex >
    )
}

const MyInput = () => (
    <Input type="text" focusBorderColor='white' bg="#E0E0E0" color="black" _focus={{ bg: "white" }}
        style={{ border: "none", boxShadow: "inset 0px 0px 7px -2px #000000" }} placeholder="Enter username" />
)

const PasswordInput = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size="md">
            <Input type={show ? "text" : "password"} focusBorderColor='white' bg="#E0E0E0" color="black"
                style={{ border: "none", boxShadow: "inset 0px 0px 7px -2px #000000" }} placeholder="Enter password"
                _focus={{ bg: "white" }} />
            <InputRightElement>
                <Box onClick={handleClick}>
                    {show ? <AiFillEyeInvisible color="black" /> : <AiFillEye color="black" />}
                </Box>
            </InputRightElement>
        </InputGroup>
    )
}