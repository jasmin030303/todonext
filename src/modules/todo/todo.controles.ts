import { Request, Response } from "express";

let data: any = [
  {
    name: "prisma",
    age: 33,
    url: "hjkghjkj",
    emaill: "jasmintagaeva@mail.com",
  },
];

const getAllData = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllData: ${error}`,
    });
  }
};

const postAllData = (req: Request, res: Response) => {
try {

 const { name, age, url, emaill } = req.body;

    const newObj = {
      name,
      age,
      url,
      emaill
    };


  res.status(200).json({
    success: true,
    data
  })
} catch (error) {
  res.status(500).json({
    success: false,
    error: `Error in postAllData: ${error}`
  })
}

}



export default {
  getAllData,
  postAllData
};
