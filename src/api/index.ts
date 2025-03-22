import express from "express";
import userRouter from "./router/user.router";
const router = express.Router();

router.use("/user", userRouter);
// router.use("/article", articleRouter); ...

export default router;