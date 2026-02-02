import express from "express";
import { authMiddleware } from "./middleware/auth";
import { errorHandler } from "./middleware/errorHandler";
import adminRoutes from "./routes/admin";
import answererRoutes from "./routes/answerer";

export const app = express();

app.use(express.json()); 
app.use(authMiddleware); 

app.use("/admin", adminRoutes);
app.use("/answerer", answererRoutes);
app.use(errorHandler);

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});



app.get("/ping", (_req, res) => {
  res.send("pong");
});
