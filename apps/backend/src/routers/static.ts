import { Router, Request, Response, static as staticMiddle } from "express";
import { resolve } from "path";

export const StaticRouter = Router();

const staticDir = resolve(__dirname, "..", "..", "..", "frontend", "dist");

StaticRouter.use(staticMiddle(staticDir));

StaticRouter.use("*", (req: Request, res: Response) => {
  res.sendFile(resolve(staticDir, "index.html"));
});
