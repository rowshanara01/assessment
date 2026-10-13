/* eslint-disable @typescript-eslint/no-unused-vars */
import { Server } from "http";
import "dotenv/config";
import dotenv from "dotenv";
import app from "./app";

let server: Server;
const port = process.env.PORT || 4000;
dotenv.config();

const startServer = async () => {
  try {
    server = app.listen(port, () => {
      console.log(`App listening at port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
