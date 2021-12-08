import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home";
import Topholders from "./pages/topholders";
import Liquiditypools from "./pages/liquiditypools";
import Farmingpools from "./pages/farmingpools";
import Fees from "./pages/fees";
import Address from "./pages/address";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Snowflakes from "magic-snowflakes";
import { MoralisProvider } from "react-moralis";

//import SurpriseSanta from "surprise-santa";

const snowflakes = new Snowflakes({
  color: "#a4e1f4",
  count: 10,
  maxSize: 25,
  minOpacity: 0.1,
  maxOpacity: 0.75,
  rotation: true,
  zIndex: -100,
});

const APP_ID = process.env.REACT_APP_MORALIS_APP;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER;

snowflakes.start();
ReactDOM.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <ChakraProvider>
      {/*  <SurpriseSanta minTime={15} maxTime={25} /> */}
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/address/:addr" element={<Address />} />
          <Route path="/topholders" element={<Topholders />} />
          <Route path="/liquiditypools" element={<Liquiditypools />} />
          <Route path="/farmingpools" element={<Farmingpools />} />
          <Route path="/fees" element={<Fees />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </MoralisProvider>,
  document.getElementById("root")
);
