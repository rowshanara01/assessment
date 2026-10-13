import express, { Request, Response } from "express";
import { checkAuth } from "../../middleware/auth.middleware";

const router = express.Router();

router.get("/dashboard", checkAuth, (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome to the protected dashboard",
    });
  } catch (error) {
    console.log(error);
  }
});

export const dashboardRoutes = router;
