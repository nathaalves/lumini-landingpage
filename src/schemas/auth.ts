import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'O e-mail é obrigatório.' })
    .min(1, 'O e-mail é obrigatório.')
    .email('E-mail inválido.'),
  password: z
    .string({ required_error: 'A senha é obrigatória.' })
    .min(1, 'A senha é obrigatória.')
    .min(8, 'A senha deve ter 8 ou mais caracteres.')
    .max(32, 'A senha deve ter no máximo 32 caracteres')
})
