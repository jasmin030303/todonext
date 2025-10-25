"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controles_1 = __importDefault(require("./todo.controles"));
const router = (0, express_1.Router)();
router.get("/get", todo_controles_1.default.getAllData);
router.post("/post", todo_controles_1.default.postAllData);
exports.default = router;
//# sourceMappingURL=todo.routes.js.map