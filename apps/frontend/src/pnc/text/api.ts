import { useQuery } from "react-query";
import { AppRoutes, HomePage } from "shapes";

const getHomepageText = async (): Promise<HomePage> => {
  const response = await fetch(AppRoutes.homepageText, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const homepageTextQuery = (shouldFetch: boolean) => {
  return useQuery(["text/home"], getHomepageText, { enabled: shouldFetch });
};
