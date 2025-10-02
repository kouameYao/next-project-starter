import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Adresse email invalide'),
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .regex(
      /[A-Z]/,
      'Le mot de passe doit contenir au moins une lettre majuscule'
    )
    .regex(
      /[a-z]/,
      'Le mot de passe doit contenir au moins une lettre minuscule'
    )
    .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
    .regex(
      /[\W_]/,
      'Le mot de passe doit contenir au moins un caractère spécial'
    )
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const defaultValues: LoginFormData = {
  email: '',
  password: ''
};
