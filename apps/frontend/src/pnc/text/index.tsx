import React, { createContext, useContext, useState } from "react";
import { homepageTextQuery } from "./api";
import { HomePage } from "shapes";

export interface TextContext {
  homepage?: HomePage;
  isLoading: boolean;
}

const TextContext = createContext<TextContext>({} as TextContext);

type TextProviderProps = {
  children: React.ReactNode;
};

export const TextProvider = ({ children }: TextProviderProps) => {
  const [homeText, setHome] = useState<HomePage>();
  const homePage = homepageTextQuery(!homeText);
  if (homePage.data && !homeText) {
    setHome(homePage.data);
  }
  return (
    <TextContext.Provider
      value={{
        isLoading: homePage.isLoading,
        homepage: homeText,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("useText must be used inside of the provider");
  }
  return context;
};
