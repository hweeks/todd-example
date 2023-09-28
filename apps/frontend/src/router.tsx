import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./pages/Home";
import { GridBase } from "./styles";
import { MurchFrontendRoutes } from "shapes/src/routes/frontend";

const RouterView = () => {
  return (
    <Route path={MurchFrontendRoutes.home} element={<GridBase />}>
      <Route path={MurchFrontendRoutes.home} element={<Home />} />
    </Route>
  );
};

export const router = createBrowserRouter(createRoutesFromElements(RouterView()));
