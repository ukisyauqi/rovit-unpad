import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Button,
  toast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import fire from "./fire";
import Administration from "./Pages/Administration";
import FaceScan from "./Pages/FaceScan";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MCU from "./Pages/MCU";
import Navigation from "./Pages/Navigation";


function App() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState();
  const refLogin = useRef();

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/user-disabled":
            setEmailError(err.message);
            break;
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleSignup = () => {
    console.log(email, password);
    clearErrors();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/email-invalid":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            console.log("error");
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else setUser("");
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      <Box color="white">
        {user ? (
          <>
            <Tabs bg="teal.800" variant="unstyled" isFitted>
              <TabList height="50px">
                <Tab
                  _selected={{
                    bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
                    boxShadow: "0px 0px 5px 3px teal",
                  }}
                  borderRight="1px dotted teal"
                >
                  Navigation
                </Tab>
                <Tab
                  _selected={{
                    bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
                    boxShadow: "0px 0px 5px 3px teal",
                  }}
                  borderRight="1px dotted teal"
                >
                  Face Scan
                </Tab>
                <Tab
                  _selected={{
                    bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
                    boxShadow: "0px 0px 5px 3px teal",
                  }}
                  borderRight="1px dotted teal"
                >
                  Medical Check-Up
                </Tab>
                <Tab
                  _selected={{
                    bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
                    boxShadow: "0px 0px 5px 3px teal",
                  }}
                  borderRight="1px dotted teal"
                >
                  Administration
                </Tab>
                <Button
                  variant="link"
                  color="white"
                  mx="20px"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </TabList>

              <TabPanels bg="#323232" height="calc(100vh - 50px)">
                <TabPanel>
                  <Navigation />
                </TabPanel>
                <TabPanel>
                  <FaceScan />
                </TabPanel>
                <TabPanel>
                  <MCU />
                </TabPanel>
                <TabPanel>
                  <Administration />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        ) : (
          <>
            <Tabs bg="teal.800" variant="unstyled" isFitted>
              <TabList height="50px">
                <Tab
                  _selected={{
                    bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
                    boxShadow: "0px 0px 5px 3px teal",
                  }}
                  borderRight="1px dotted teal"
                >
                  Home
                </Tab>
                <Tab
                  _selected={{
                    bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
                    boxShadow: "0px 0px 5px 3px teal",
                  }}
                  borderRight="1px dotted teal"
                  ref={refLogin}
                >
                  Login
                </Tab>
              </TabList>

              <TabPanels bg="#323232" height="calc(100vh - 50px)">
                <TabPanel>
                  <Home refLogin={refLogin} />
                </TabPanel>
                <TabPanel>
                  <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    clearErrors={clearErrors}
                    clearInput={clearInput}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
