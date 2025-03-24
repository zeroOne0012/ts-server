import express from "express";
import memberRouter from "./router/member.router";
const router = express.Router();

router.use("/member", memberRouter);
// router.use("/article", articleRouter); ...

export default router;