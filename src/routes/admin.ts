import { Router } from "express";
import { prisma } from "../prisma";
import { AuthRequest } from "../middleware/auth";

const router = Router();

router.use((req: AuthRequest, res, next) => {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
});

router.get("/surveys", async (req: AuthRequest, res) => {
  console.log("ADMIN /surveys hit", req.user);

  const surveys = await prisma.survey.findMany({
    where: { ownerId: req.user!.id },
  });

  console.log("Surveys found:", surveys.length);

  res.json(surveys);
});


router.post("/surveys", async (req: AuthRequest, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const survey = await prisma.survey.create({
    data: {
      title,
      ownerId: req.user!.id,
    },
  });

  res.status(201).json(survey);
});

export default router;
