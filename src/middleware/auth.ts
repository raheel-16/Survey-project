import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: "ADMIN" | "ANSWERER";
  };
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const userId = req.header("x-user-id");
  const userRole = req.header("x-user-role");

  if (!userId || !userRole) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (userRole !== "ADMIN" && userRole !== "ANSWERER") {
    return res.status(403).json({ error: "Invalid role" });
  }

  
  req.user = {
    id: userId,
    role: userRole as "ADMIN" | "ANSWERER",
  };

  
  next();
}
