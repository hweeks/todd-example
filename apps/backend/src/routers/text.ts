import { Router, Request, Response } from "express";
import { AppRoutes, HomePage } from "shapes";

export const TextRouter = Router();

const getHomepageText = async (req: Request, res: Response<HomePage>) => {
  res.send({ text: "hi" });
};

TextRouter.get(AppRoutes.homepageText, getHomepageText);
