import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}
export const prisma = globalThis.prisma || new PrismaClient();
if (import.meta.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// export const prisma = new PrismaClient();
