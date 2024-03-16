// Need to use the React-specific entry point to import createApi
import { supabase } from "@/utils/supabase";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICreateCollection, IEditCollection } from "../types/CollectionSchema";

export const collectionSlice = createApi({
  reducerPath: "collectionSlice",
  tagTypes: ["Collection"],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    listCollections: builder.query({
      queryFn: async (): Promise<any> => {
        const { data, error } = await supabase
          .from("collections")
          .select("id, name, color, userId")
          .order("created_at", { ascending: true });

        if (error) {
          throw { error };
          // console.log("error fetching collections", error);
        }

        return { data };
      },
      providesTags: [{ type: "Collection", id: "LIST" }],
    }),
    addCollection: builder.mutation({
      queryFn: async (payload: ICreateCollection): Promise<any> => {
        const { data, error } = await supabase.from("collections").insert({
          name: payload.name,
          color: payload.color,
          userId: payload.userId,
        });
        if (error) {
          throw { error };
          // console.log("error fetching collections", error);
        }

        return { data };
      },
      invalidatesTags: [{ type: "Collection", id: "LIST" }],
    }),
    editCollection: builder.mutation({
      queryFn: async (payload: IEditCollection): Promise<any> => {
        const { data, error } = await supabase
          .from("collections")
          .update({
            name: payload.name,
            color: payload.color,
          })
          .eq("id", payload.id);

        if (error) {
          throw { error };
          // console.log("error fetching collections", error);
        }

        return { data };
      },
      invalidatesTags: [{ type: "Collection", id: "LIST" }],
    }),
  }),
});

export const {
  useListCollectionsQuery,
  useAddCollectionMutation,
  useEditCollectionMutation,
} = collectionSlice;
