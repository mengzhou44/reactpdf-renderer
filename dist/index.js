"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const renderer_1 = __importDefault(require("@react-pdf/renderer"));
const MyDocument_1 = __importDefault(require("./MyDocument"));
const react_1 = __importDefault(require("react"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(`<h2>Hello, Running on port: ${port}</h2>`);
});
app.get('/pdf', (req, res) => {
    renderer_1.default.render(react_1.default.createElement(MyDocument_1.default, null), `${__dirname}/example.pdf`);
    res.send(`<h2>done</h2>`);
});
const port = 3001;
app.listen(3001, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
