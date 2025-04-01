"use client";

import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(2, "Please enter Username | Email").max(50),
  password: z
    .string()
    .min(8, "Password must be atleast 8 characters")
    .max(50, "Password must be less than 50 characters"),
});
