import {PrismaClient} from "@prisma/client";
import {env} from "~/env";

const createPrismaClient = (): PrismaClient => {
  return new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
};

type GlobalForPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

const globalForPrisma: GlobalForPrisma = globalThis as GlobalForPrisma;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = createPrismaClient();
}

export const db: PrismaClient = globalForPrisma.prisma;