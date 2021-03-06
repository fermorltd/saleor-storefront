import "../globalStyles/scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@styles";

import { Footer, MainMenu, MetaConsumer, OverlayManager } from "../components";
import { isPath } from "../core/utils";
import { orderConfirmationUrl, Routes } from "../routes";

const App: React.FC<RouteComponentProps> = ({
  history: {
    location: { pathname }
  }
}) => {
  const orderConfirmationPage = isPath(pathname, orderConfirmationUrl);

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <MetaConsumer />
        <header>
          <MainMenu />
        </header>
        <Routes />
        {!orderConfirmationPage && <Footer />}
        <OverlayManager />
      </>
    </ThemeProvider>
  );
};

export default App;
