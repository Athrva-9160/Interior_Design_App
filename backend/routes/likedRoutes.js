import express from "express";

import
{
  likeDesign,
  unlikeDesign,
  getLikedByCategory
}
from "../controllers/likedController.js";

const router = express.Router();

router.post("/", likeDesign);
router.post("/unlike", unlikeDesign);
router.get("/user/:userId/:category", getLikedByCategory);

export default router;
  