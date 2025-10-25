import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getAllData = async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  try {
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllData: ${error}`,
    });
  }
};

const postAllData = async (req: Request, res: Response) => {
  try {
    const { name, age, url, emaill } = req.body;
    const post = await prisma.user.create({
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in postAllData: ${error}`,
    });
  }
};

export default {
  getAllData,
  postAllData,
};
