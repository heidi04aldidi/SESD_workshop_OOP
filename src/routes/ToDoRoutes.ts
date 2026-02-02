import { Router } from "express";
import todoController from "../controllers/ToDoController";

const router = Router();

router.post("/", todoController.create);
router.get("/", todoController.getAll);
router.get("/:id", todoController.getById);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);

export default router;
