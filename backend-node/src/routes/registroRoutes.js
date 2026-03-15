import { Router } from "express";
import { registroController } from "../controllers/registroController.js";

export const registroRouter = Router();

registroRouter.get("/", registroController.list);
registroRouter.post("/", registroController.create);
registroRouter.put("/:id", registroController.update);
registroRouter.delete("/:id", registroController.remove);
