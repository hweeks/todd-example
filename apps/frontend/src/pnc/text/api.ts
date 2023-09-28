import { useQuery } from "react-query";

const getHomepageText = async (): Promise<{ text: string }> => {
  const response = await fetch("/api/text/home", {
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
