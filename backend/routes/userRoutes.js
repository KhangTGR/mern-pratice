import express from "express";
import {} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/product", productUser);
router.post("/uploadProduct", uploadProductUser);
router.get("/create-checkout-session", createCheckoutSessionUser);

export default router;
