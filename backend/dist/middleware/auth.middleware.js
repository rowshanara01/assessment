"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET || "a-string-secret-at-least-256-bits-long";
const checkAuth = (req, res, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
        return res
            .status(401)
            .json({ success: false, message: "Unauthorized: No token provided" });
    }
    jsonwebtoken_1.default.verify(accessToken, SECRET_KEY, (err) => {
        if (err) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized: Invalid token" });
        }
        next();
    });
};
exports.checkAuth = checkAuth;
