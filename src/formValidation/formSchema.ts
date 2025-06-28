import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export const formSchema = z.object({
    email: z.string()
        .min(6, { message: "minimum 6 caractères." })
        .email("email invalide."),

    password: z.string()
        .min(8, { message: "minimum 8 caractères." })
        .max(20, { message: "maximum 20 caractères." })
        .trim(),

    confirmPassword: z.string()
        .min(8, { message: "minimum 8 caractères." })
        .max(20, { message: "maximum 20 caractères." })
        .trim(),

    pseudo: z.string().min(1, {
        message: "le champs est vide",
    }),

  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Taille maximale recommendée est 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Seul les formats .jpg, .jpeg, .png et .webp  sont supportés."
    )

}).refine((data) => data.password === data.confirmPassword,
    { message: "Les mots de passe ne correspondent pas", path: ["confirmPassword"], });



export type validateFormSchema = z.infer<typeof formSchema>;