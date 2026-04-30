import express from "express";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { ensureAuthenticated } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
// router.get("/signin", (req, res) => {
//   res.send("test");
// });
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", ensureAuthenticated, updateProfile);
router.get("/check", ensureAuthenticated, (req, res) => {
  res.status(200).json(req.user);
});
export default router;
