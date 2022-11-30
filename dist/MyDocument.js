"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const react_pdf_table_1 = __importDefault(require("react-pdf-table"));
// Create styles
const styles = renderer_1.StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
// Create Document Component
const MyDocument = () => react_1.default.createElement(renderer_1.Document, null,
    react_1.default.createElement(renderer_1.Page, { size: "A4", style: styles.page },
        react_1.default.createElement(renderer_1.View, { style: styles.section },
            react_1.default.createElement(renderer_1.Text, null, "Section #1"),
            react_1.default.createElement(react_pdf_table_1.default.TableRow, null,
                react_1.default.createElement(react_pdf_table_1.default.TableCell, { text: "Cell 1", align: "right" }),
                react_1.default.createElement(react_pdf_table_1.default.TableCell, { text: "Cell 1", align: "center" }),
                react_1.default.createElement(react_pdf_table_1.default.TableCell, { text: "Cell 1", align: "left" }))),
        react_1.default.createElement(renderer_1.View, { style: styles.section },
            react_1.default.createElement(renderer_1.Text, null, "Section #2"))));
exports.default = MyDocument;
