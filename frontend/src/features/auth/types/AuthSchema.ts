import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be minimum of 6 characters long" })
    .max(32, { message: "Password must be maximum of 32 characters long" }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be minimum of 6 characters long" })
      .max(32, { message: "Password must be maximum of 32 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be minimum of 6 characters long" })
      .max(32, { message: "Password must be maximum of 32 characters long" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords did not match",
      });
    }
  });
