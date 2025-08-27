// Importing necessary components and styles
import { PrismaClient } from '@prisma/client';

/**
 * @fileoverview This file initializes and exports a singleton instance of PrismaClient.
 * This pattern ensures that during development, a new PrismaClient instance is not
 * created on every hot reload, which can prevent issues like too many database connections.
 * In production, a new instance is created on each deployment.
 */

/**
 * @global globalForPrisma
 * @description Extends the global object with a `prisma` property.
 * This is a TypeScript-specific declaration to allow storing `PrismaClient` on the global object,
 * enabling the singleton pattern for development environments.
 * @type {object}
 * @property {PrismaClient} prisma - The PrismaClient instance stored globally.
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient };

/**
 * @constant prisma
 * @description Exports a singleton instance of `PrismaClient`.
 * In development, it reuses an existing global instance if available to avoid multiple connections
 * during hot module reloading. In production, it creates a new instance.
 * It also configures logging levels for database queries and events.
 * @type {PrismaClient}
 */
export const prisma =
  globalForPrisma.prisma || // Reuse global instance in development if it exists
  new PrismaClient({
    // Configure logging for various database operations for debugging and monitoring
    log: ['query', 'info', 'warn', 'error'],
  });

/**
 * @description In development environments, the PrismaClient instance is attached to the
 * global object. This prevents the creation of multiple PrismaClient instances during
 * Next.js hot module replacement (HMR), which can otherwise lead to connection pool issues.
 * This check is skipped in production builds.
 */
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

/**
 * @default
 * @description The default export is the singleton `prisma` client instance,
 * making it readily available for database interactions throughout the application.
 */
export default prisma;
