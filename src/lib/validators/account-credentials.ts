import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().email().min(5, {
    message: "email must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters.",
  }),
});

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;
