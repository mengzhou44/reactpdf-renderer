"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/pdf', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pdf = yield renderer_1.default.renderToString(react_1.default.createElement(MyDocument_1.default, null));
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length });
    res.send(pdf);
}));
const port = 3001;
app.listen(3001, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
