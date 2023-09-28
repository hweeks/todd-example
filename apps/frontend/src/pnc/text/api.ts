import { useQuery } from "react-query";
import { MurchRequestAndResponses } from "shapes";
import { MurchRoutes } from "shapes/src/routes/backend";

const getHomepageText = async (): Promise<MurchRequestAndResponses[MurchRoutes.homepageText]["res"]> => {
  const response = await fetch(MurchRoutes.homepageText, {
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
