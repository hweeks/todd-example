import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  html * {
    font-family: inherit;
  }

  html {
    background-color: ${(p) => p.theme.colors.offWhite};
  }
  
  p,h1,h2,h3,h4,h5,h6,a, ::placeholder {
    color: ${(p) => p.theme.colors.primary};
    font-family: '${(p) => p.theme.fonts.main}', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: '${(p) => p.theme.fonts.secondary}', serif;
  }
`;

export enum GridRowsAndColumns {
  header = "header",
  mainSection = "main-section",
  featured = "main-featured",
  rowsOfContent = "rows-of-content",
  footer = "footer",
  gutter = "gutter",
  gutterRight = "gutter-right",
  mainColumn = "main-column",
}

const HomeLayout = styled.div<{ rowCount?: number }>`
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  grid-template-rows: [${GridRowsAndColumns.header}] 196px 
    [${GridRowsAndColumns.mainSection}] 1fr 
    [${GridRowsAndColumns.footer}] 1fr;
  grid-template-columns: [${GridRowsAndColumns.gutter}] 7vw [${GridRowsAndColumns.mainColumn}] 86vw [${GridRowsAndColumns.gutterRight}] 7vw;
`;

export const GridBase = () => {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};
