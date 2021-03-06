import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from './theme';


//import * as serviceWorker from './serviceWorker';

//import { ApolloProvider, ApolloClient } from "@apollo/client";
// import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);

//serviceWorker.register();

//TODO FRONT-END
// look into extending theme and create theme.js
