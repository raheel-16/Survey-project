// src/prisma.ts
import "dotenv/config"   // ensure .env is loaded
import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()
