import { Router } from "express";
import controles from "./todo.controles";

const router = Router();

router.get("/get", controles.getAllData);
router.post("/post", controles.postAllData);

export default router;
