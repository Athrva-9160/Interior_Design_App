import express from "express";
import { registerUser, loginUser } from "../controllers/registerUserController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


router.get("/profile", protect, (req, res) => {
  res.json({
    msg: "Profile accessed",
    user: req.user
  });
});


export default router;
