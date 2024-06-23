import express from "express";
import { getAllUniqueBackgroundAnimations } from "../controllers/cloudinaryurl.controller.js";

const router = express.Router();

// Get all BackgroundAnimation urls
router.get('/', getAllUniqueBackgroundAnimations);

export default router