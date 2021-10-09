import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import Administration from "./Pages/Administration";
import FaceScan from "./Pages/FaceScan";
import Login from "./Pages/Login";
import MCU from "./Pages/MCU";
import Navigation from "./Pages/Navigation";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <Box color="white">
        <Tabs bg="teal.800" variant="unstyled" isFitted>

          <TabList height="50px">
            <Tab _selected={{
              bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
              boxShadow: "0px 0px 5px 3px teal"
            }} borderRight="1px dotted teal">
              Login
            </Tab>
            <Tab _selected={{
              bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
              boxShadow: "0px 0px 5px 3px teal"
            }} borderRight="1px dotted teal">
              Register
            </Tab>
            <Tab _selected={{
              bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
              boxShadow: "0px 0px 5px 3px teal"
            }} borderRight="1px dotted teal">
              Navigation
            </Tab>
            <Tab _selected={{
              bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
              boxShadow: "0px 0px 5px 3px teal"
            }} borderRight="1px dotted teal">
              Face Scan
            </Tab>
            <Tab _selected={{
              bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
              boxShadow: "0px 0px 5px 3px teal"
            }} borderRight="1px dotted teal">
              MCU
            </Tab>
            <Tab _selected={{
              bg: "linear-gradient(90deg, rgba(0,179,179,1) 0%, #55d5c0 100%)",
              boxShadow: "0px 0px 5px 3px teal"
            }} >
              Administration
            </Tab>
          </TabList>

          <TabPanels bg="#323232" height="calc(100vh - 50px)">
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
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
      </Box>
    </div>
  );
}

export default App;
