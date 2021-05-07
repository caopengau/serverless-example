"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("", (_req, res, _next) => {
    return res.status(200).json({
        message: "Hello from root!"
    });
});
app.get("/hello", (_req, res, _next) => {
    return res.status(200).json({
        message: "Hello from path!"
    });
});
app.use((_req, res, _next) => {
    return res.status(404).json({
        error: "Not Found"
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map