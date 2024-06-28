import { z } from "zod";
import { toast } from "sonner";

export const formSchema = z
  .object({
    hours: z.string().regex(/^\d{0,3}$/, "Entrez 3 chiffres maximum"),
    minutes: z.string().regex(/^\d{0,2}$/, "Entrez 2 chiffres maximum"),
    seconds: z.string().regex(/^\d{0,2}$/, "Entrez 2 chiffres maximum"),
    name: z
      .string()
      .max(10, "Le nom doit contenir 10 caractères maximum")
      .optional(),
  })
  .refine((data) => {
    const total =
      parseInt(data.hours) + parseInt(data.minutes) + parseInt(data.seconds);
    if (total > 0) return true;
    if (total <= 0) {
      toast.error("Le timer doit avoir au moins une valeur supérieure à zéro", {
        duration: 1000,
      });
      return false;
    }
  });
