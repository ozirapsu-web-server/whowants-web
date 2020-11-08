import React from "react";
import reset from "styled-reset";
import { Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "styles/theme";
import Story from "pages/Story";
import ParticipateContainer from "containers/ParticipateContainer";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        outline:none;
    }
    body{
        font-size:14px;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        height:100%;
        background:#F0F0F0;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/" component={Story} exact={true} />
      <Route path="/story" component={Story} exact={true} />
      <Route
        path="/participate"
        component={ParticipateContainer}
        exact={true}
      />
      <Route path="/" exact={true}>
        NOT FOUND
      </Route>
    </ThemeProvider>
  );
};

export default App;
