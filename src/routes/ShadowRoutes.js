import express from 'express';
// import authMiddleware from '../middleware/auth.middleware.js';
import {getAllShadowsController, getOnePlayerController, createAnewPlayerController, updateOnePlayerController, deleteOnePlayerController} from '../controllers/shadowLogController.js'

const router = express.Router();

router.get("/", getAllShadowsController)

router.get("/:shadowId", getOnePlayerController)

router.post("/", createAnewPlayerController)

router.patch("/:shadowId", updateOnePlayerController)

router.delete("/:shadowId", deleteOnePlayerController)


export default router;