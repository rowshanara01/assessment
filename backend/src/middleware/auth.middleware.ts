import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY =
  process.env.JWT_SECRET || "a-string-secret-at-least-256-bits-long";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  jwt.verify(accessToken, SECRET_KEY, (err) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid token" });
    }
    next();
  });
};
