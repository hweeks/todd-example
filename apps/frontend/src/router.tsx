import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./pages/Home";
import { GridBase } from "./styles";

const RouterView = () => {
  return (
    <Route path={"/"} element={<GridBase />}>
      <Route path={"/"} element={<Home />} />
    </Route>
  );
};

export const router = createBrowserRouter(createRoutesFromElements(RouterView()));
