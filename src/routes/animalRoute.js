import { Router } from "express";
import * as AnimalController from './../controllers/animalController.js';

const router = Router();

//Rota GetAll em /
router.get("/", AnimalController.listarTodos);

//Rota GetById
router.get("/:id", AnimalController.listarUm);

//Rota create
router.post("/", AnimalController.criar);

//Rota delete
router.delete("/:id", AnimalController.apagar);

//Rota update
router.put("/:id", AnimalController.atualizar);

export default router;