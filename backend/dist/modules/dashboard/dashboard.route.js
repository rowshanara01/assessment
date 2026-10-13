"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = express_1.default.Router();
router.get("/dashboard", auth_middleware_1.checkAuth, (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome to the protected dashboard",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.dashboardRoutes = router;
