"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../config/prisma"));
const getAllData = async (req, res) => {
    const user = await prisma_1.default.user.findMany();
    try {
        res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in getAllData: ${error}`,
        });
    }
};
const postAllData = async (req, res) => {
    try {
        const { name, age, url, emaill } = req.body;
        const post = await prisma_1.default.user.create({
            data: {
                name,
                age,
                url,
                emaill,
            },
        });
        res.status(200).json({
            success: true,
            data: post,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in postAllData: ${error}`,
        });
    }
};
exports.default = {
    getAllData,
    postAllData,
};
//# sourceMappingURL=todo.controles.js.map