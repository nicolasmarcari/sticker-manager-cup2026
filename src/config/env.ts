import { loadEnvFile } from 'node:process';
import { z } from "zod";

loadEnvFile();

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DB_HOST: z.string().default('localhost'),
  DB_USER: z.string().default('postgres'),
  DB_PASSWORD: z.string().default('postgres'),
  DB_NAME: z.string().default('database'),
  DB_PORT: z.coerce.number().default(5432),
});

export const env = envSchema.parse(process.env);
