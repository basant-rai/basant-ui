import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
  description: z.string().min(1, "Description is required"),
})

export type LoginFormValues = z.infer<typeof LoginSchema>