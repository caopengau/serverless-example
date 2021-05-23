"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const expressServer = express_1.default();
expressServer.get("", (_req, res, _next) => {
    return res.status(200).json({
        message: "Hello from root!"
    });
});
expressServer.get("/hello", (_req, res, _next) => {
    return res.status(200).json({
        message: "Hello from path!"
    });
});
expressServer.use((_req, res, _next) => {
    return res.status(404).json({
        error: "Not Found"
    });
});
exports.default = expressServer;
//# sourceMappingURL=expressServer.js.map