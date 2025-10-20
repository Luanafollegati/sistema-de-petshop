import { Router } from "express";
import * as AnimalController from './../controllers/animalController.js';

const router = Router();

//Rota GetAll em /
router.get("/", AnimalController.listarTodos);

//Rota GetById
router.get("/:id", AnimalController.listarUm);

export default router;