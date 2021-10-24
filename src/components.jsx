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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import imgBtnController from "./assets/btn.jpg";
import imgBtnStop from "./assets/stop.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const MyInput = () => (
  <Input
    type="text"
    focusBorderColor="white"
    bg="#E0E0E0"
    color="black"
    _focus={{ bg: "white" }}
    style={{ border: "none", boxShadow: "inset 0px 0px 7px -2px #000000" }}
    placeholder="Enter username"
  />
);

export const MyInputEmail = () => (
  <Input
    type="email"
    focusBorderColor="white"
    bg="#E0E0E0"
    color="black"
    _focus={{ bg: "white" }}
    style={{ border: "none", boxShadow: "inset 0px 0px 7px -2px #000000" }}
    placeholder="Enter email"
  />
);

export const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        type={show ? "text" : "password"}
        focusBorderColor="white"
        bg="#E0E0E0"
        color="black"
        style={{ border: "none", boxShadow: "inset 0px 0px 7px -2px #000000" }}
        placeholder="Enter password"
        _focus={{ bg: "white" }}
      />
      <InputRightElement>
        <Box onClick={handleClick}>
          {show ? (
            <AiFillEyeInvisible color="black" />
          ) : (
            <AiFillEye color="black" />
          )}
        </Box>
      </InputRightElement>
    </InputGroup>
  );
};

export const Controller = () => (
  <Center mt="10px">
    <Box>
      <Center>
        <button className="btn-controller">
          <Image src={imgBtnController} alt="controller"></Image>
        </button>
      </Center>
      <Flex>
        <button
          className="btn-controller"
          style={{
            transform: "rotate(-90deg)",
            position: "relative",
            left: -30,
          }}
        >
          <Image zIndex="-1" src={imgBtnController} alt="controller"></Image>
        </button>
        <Flex height="132" justify="center" align="center">
          <button className="btn-controller" style={{ height: "100px" }}>
            <Image src={imgBtnStop} alt="stop"></Image>
          </button>
        </Flex>
        <button
          className="btn-controller"
          style={{ transform: "rotate(90deg)", position: "relative", left: 30 }}
        >
          <Image src={imgBtnController} alt="controller"></Image>
        </button>
      </Flex>
      <Center>
        <button
          className="btn-controller"
          style={{ transform: "rotate(180deg)" }}
        >
          <Image src={imgBtnController} alt="controller"></Image>
        </button>
      </Center>
    </Box>
  </Center>
);

export const SpeedController = () => (
  <Box mt="45px">
    <BlackButton ml="40px" text="Remote Control" />
    <Center>
      <Text fontSize="2xl" mt="100px" mb="20px">
        Speed Control
      </Text>
    </Center>

    <Center>
      <button className="btn-controller" style={{ transform: "scale(0.7)" }}>
        <Image src={imgBtnController} alt="controller"></Image>
      </button>
    </Center>
    <Center>
      <button
        className="btn-controller"
        style={{ transform: "scale(0.7) rotate(180deg)" }}
      >
        <Image src={imgBtnController} alt="controller"></Image>
      </button>
    </Center>
  </Box>
);

export const BlackButton = (props) => (
  <Box ml={props.ml} mt={props.mt} onClick={props.onClick}>
    <Button
      isLoading={props.isLoading}
      size="lg"
      bg="#232325"
      _hover={{
        bg: "#232325",
        boxShadow: "10px 1px 13px 0px #000000, -10px -1px 13px 0px #888888",
      }}
      _click={{ bg: "#232325" }}
      _active={{ bg: "#232325", transform: "scale(0.965)", boxShadow: "none" }}
      _focus={{ bg: "#232325" }}
      borderRadius="30px"
      boxShadow="10px 1px 13px -5px #000000, -10px -1px 13px -5px #888888"
    >
      <Text fonSize="xl">{props.text}</Text>
    </Button>
  </Box>
);

export const MyCheckbox = (props) => (
  <>
    <Checkbox
      colorScheme="teal"
      position="relative"
      top="4px"
      bg="teal"
      border="1px solid teal"
      borderRadius="4px"
      mb="10px"
      isReadOnly
      isChecked={props.isChecked}
    />
    <Text as="abbr" pl="10px">
      {props.text}
    </Text>
  </>
);

export const ItemDrawer = () => (
  <Select placeholder="Select option" border="none" size="xs" transform="scale(0.9)">
    <option style={{ color: "black" }}>Paracetamol</option>
    <option style={{ color: "black" }}>Amoxicillin</option>
    <option style={{ color: "black" }}>Vitamin C</option>
    <option style={{ color: "black" }}>Makanan</option>
    <option style={{ color: "black" }}>Minuman</option>
    <option style={{ color: "black" }}>Aqua</option>
  </Select>
);
