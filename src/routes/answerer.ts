import { Router } from "express";
import { prisma } from "../prisma";
import { AuthRequest } from "../middleware/auth";

const router = Router();

// Middleware: only allow ANSWERER
router.use((req, res, next) => {
  const user = (req as AuthRequest).user;

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (user.role !== "ANSWERER") {
    return res.status(403).json({ error: "Forbidden" });
  }

  next();
});

// GET /answerer/surveys -> list available surveys for the user
router.get("/surveys", async (req, res) => {
  try {
    // For now, we return all surveys. Later you can filter based on access rules
    const surveys = await prisma.survey.findMany({
      include: {
        questions: true,
      },
    });
    res.json(surveys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch surveys" });
  }
});

export default router;
