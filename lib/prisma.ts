import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

// This function creates a singleton instance of PrismaClient using the PrismaNeon adapter and the Neon database pool.
const prismaClientSingleton = () => {
  // Create a new connection pool to the PostgreSQL database using the connection string from the environment variables
  const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL });
  
  // Create a new Prisma adapter for the Neon database pool
  const adapter = new PrismaNeon(neon);
  
  // Return a new instance of PrismaClient using the created adapter
  return new PrismaClient({ adapter });
};

// Declare a global variable that will hold the singleton instance of PrismaClient
declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Check if the global variable already exists. If it does, use that. If it doesn't, create a new instance by calling the prismaClientSingleton function.
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// If the application is not running in production mode, set the global variable to the created instance of PrismaClient.
// This is likely done to allow for easier debugging and testing.
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;