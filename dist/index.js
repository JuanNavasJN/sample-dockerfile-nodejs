"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use("/", (req, res) => {
    res.json("Hello from digital ocean app platform wit Dockerfile and tsc");
});
app.listen(3000, "0.0.0.0", function () {
    console.log("Web Server listening on port " + 3000);
    console.log("mode: " + process.env.NODE_ENV);
});
//# sourceMappingURL=index.js.map