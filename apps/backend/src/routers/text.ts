import { Router, Request, Response } from "express";

export const TextRouter = Router();

const getHomepageText = async (
  req: Request,
  res: Response<{text: string}>,
) => {
  res.send({text: 'hi'});
};

TextRouter.get('/api/text/home', getHomepageText);
