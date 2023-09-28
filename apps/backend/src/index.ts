import express, { Request as R, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import { StaticRouter } from "./routers/static";
import { randomUUID } from "crypto";
import { TextRouter } from "./routers/text";

// i'm typescript and i make u ovveride shit stupidly
declare module "express-serve-static-core" {
  interface Request {
    tid?: string;
  }
}

// this adds a unique id that allows you to trace which middleware a request hit on it's way to resolving. this is vital in production logs to be able to group info and events
const addTracingAndMode = (request: R, response: Response, next: NextFunction) => {
  request.tid = randomUUID();
  next();
};

export const appStartup = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.get("/health", (req, res) => {
    res.send("ok");
  });
  app.use(addTracingAndMode);
  app.use(TextRouter);
  // only in production mode (ie deployed) is it needed to also server the UI, development UI is handled by webpackdevser
  if (process.env.NODE_ENV === "production") {
    app.use(StaticRouter);
  }
  // final middleware with 4 arguemnts is a special 'if any error is thrown call me' caser and does this for any error thrown in any of your backend shizz
  app.use("*", (error: Error, req: R, res: Response, next: NextFunction) => {
    const { message } = error;
    console.error({
      err: error,
      req,
      message: "Thrown in default error catcher",
    });
    if (!res.headersSent) {
      res.status(500).send({ message });
    }
    next();
    return;
  });
  // return the started server instance
  return app.listen(4000, "0.0.0.0", () => {
    process.stdout.write("up on 4000 \n");
  });
};


export const createServer = async (dbUrl: string) => {
  const server = appStartup();
  // this helper allows a restart to occurr when a file changes by also waiting for the server to die
  process.on("SIGTERM", () => {
    console.info("SIGTERM signal received.");
    console.log("Closing http server.");
    server.close(() => {
      console.log("server closed, restarting");
      process.kill(process.pid, "SIGKILL"); // Forcefully kill the process
      process.exit(0);
    });
  });
};
