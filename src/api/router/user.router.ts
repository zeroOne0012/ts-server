import express from "express";
import { getAllUser, errorTest } from "../controller/user.controller";
const router = express.Router();

router.get("/all", getAllUser);
router.get("/err", errorTest);

export default router;