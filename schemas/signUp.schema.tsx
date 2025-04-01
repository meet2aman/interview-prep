"use client";

import { z } from "zod";
const GENDERS = ["Male", "Female", "Other"] as const;

export const signUpSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50).optional(),
  age: z.string().min(1).max(100),
  gender: z.enum(GENDERS).optional(),
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
  confirmPassword: z.string().min(8).max(50),
});
