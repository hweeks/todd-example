import React from "react";
import { useText } from "../../pnc/text";

export const Home = () => {
  const { isLoading, homepage } = useText();
  if (isLoading) {
    return <>it'll be just a moment buddi, prec the patience</>;
  }
  return <pre>{JSON.stringify(homepage, null, 2)}</pre>;
};
