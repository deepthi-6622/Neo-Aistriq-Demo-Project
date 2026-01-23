import express from "express";
import {
  discordLogin,
  discordCallback,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/discord", discordLogin);


router.get("/discord/callback", discordCallback);

router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected API accessed successfully",
    user: req.user,
  });
});

export default router;
