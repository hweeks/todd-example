import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./styles";
import { TextProvider } from "./pnc/text";
import { router } from "./router";

const queryClient = new QueryClient();

const home_node = document.getElementById("home");

const WrappedHome = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <TextProvider>
          <RouterProvider router={router} />
        </TextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

window.onload = () => {
  ReactDOM.render(<WrappedHome />, home_node);
};
