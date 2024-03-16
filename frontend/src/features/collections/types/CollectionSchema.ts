import { z } from "zod";

export const CollectionSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Collection name must be at least 2 characters long" })
    .max(32, {
      message: "Collection name must be maximum of 32 characters long",
    })
    .max(100, {
      message: "Collection name must be at most 100 characters long",
    }),
  color: z.string().optional().default("#333"),
});

export type ICreateCollection = z.infer<typeof CollectionSchema> & {
  userId: string;
};

export type IEditCollection = ICreateCollection & {
  id: string;
};
