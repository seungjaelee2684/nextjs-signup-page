import { z } from "zod";

export const saleSchema : any = z.object({
    product: z
        .string(),
    userName: z
        .string(),
    phone: z
        .string(),
    location: z
        .string(),
    memo: z
        .string(),
    method: z
        .string()
});