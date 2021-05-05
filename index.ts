const serverless = require("serverless-http");
import app from "./src/app";


module.exports.handler = serverless(app);
