/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";

const expressServer = express();
expressServer.get("", (_req: any, res: any, _next: any) => {
  return res.status(200).json({
    message: "Hello from root!"
  });
});

expressServer.get("/hello", (_req: any, res: any, _next: any) => {
  return res.status(200).json({
    message: "Hello from path!"
  });
});

expressServer.use((_req: any, res: any, _next: any) => {
  return res.status(404).json({
    error: "Not Found"
  });
});

export default expressServer;
