import express, { Application, Request, Response } from "express";
import { dashboardRoutes } from "./modules/dashboard/dashboard.route";

const app: Application = express();

app.use(express.json());
app.use("/api", dashboardRoutes);

app.get("/", (req: Request, res: Response) => {
  try {
    res.send("Welcome");
  } catch (error) {
    console.log(error);
  }
});

export default app;