import {PrismaClient} from "@prisma/client";

import {env} from "~/env";

const createPrismaClient = (): PrismaClient =>
    new PrismaClient({
      log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

type GlobalForPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

const globalForPrisma: GlobalForPrisma = globalThis as GlobalForPrisma;

export const db: PrismaClient = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
