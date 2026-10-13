"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dashboard_route_1 = require("./modules/dashboard/dashboard.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", dashboard_route_1.dashboardRoutes);
app.get("/", (req, res) => {
    try {
        res.send("Welcome");
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = app;
