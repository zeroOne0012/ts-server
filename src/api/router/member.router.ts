import express from "express";
import controller from "../controller/member.controller";
const router = express.Router();

router.get("/all", controller.getAllMembers);
router.get("/:id", controller.getMember);
router.post("/register", controller.register);
router.post("/login", controller.login);
router.patch("/:id", controller.updateMember);
router.delete("/:id", controller.deleteMember);

export default router;