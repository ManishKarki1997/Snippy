import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { CollectionSchema } from "../../types/CollectionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useUserStore } from "@/features/auth/hooks/useUserStore";
import { toast } from "sonner";
import {
  useAddCollectionMutation,
  useEditCollectionMutation,
} from "../../slices/collectionSlice";
import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { ToggleGroupItem } from "@/components/ui/toggle-group";
import { ICollection } from "@/features/collections/types/CollectionType";

interface Props {
  open: boolean;
  onClose: () => void;
  collection?: null | ICollection;
}

const DUMMY_COLORS = [
  "#ffb703",
  "#fb8500",
  "#3a5a40",
  "#0077b6",
  "#e76f51",
  "#3a86ff",
  "#001d3d",
  "#b0c4b1",
  "#0081a7",
  "#ca6702",
  "#2ec4b6",
];

export const ManageCollectionForm = ({ open, onClose, collection }: Props) => {
  const { user } = useUserStore();

  const form = useForm<z.infer<typeof CollectionSchema>>({
    resolver: zodResolver(CollectionSchema),
    defaultValues: {
      name: collection?.name || "",
      color: collection?.color || "",
    },
  });

  const [addCollection, { isLoading: isAddingCollection }] =
    useAddCollectionMutation();

  const [editCollection, { isLoading: isEditingCollection }] =
    useEditCollectionMutation();

  const isAPILoading = isAddingCollection || isEditingCollection;

  const onSubmit = async (formValues: z.infer<typeof CollectionSchema>) => {
    if (!user) return;
    if (isAPILoading) return;

    console.log("forMValues", formValues);

    if (collection) {
      // edit mode

      const loadingId = toast.loading("Editing collection...");
      try {
        await editCollection({
          name: formValues.name,
          userId: user.id,
          color: formValues.color,
          id: collection.id,
        });

        toast.success("Collection edited successfully", {
          id: loadingId,
        });
        form.reset();
        onClose();
      } catch (error) {
        toast.error("Something went wrong while editing collection", {
          id: loadingId,
        });
      }
    } else {
      // create mode

      const loadingId = toast.loading("Creating collection...");
      try {
        await addCollection({
          name: formValues.name,
          userId: user.id,
          color: "#ffb703",
        });

        toast.success("Collection created successfully", {
          id: loadingId,
        });
        form.reset();
        onClose();
      } catch (error) {
        toast.error("Something went wrong while creating collection", {
          id: loadingId,
        });
      }
    }
  };

  React.useEffect(() => {
    if (!collection) return;
    console.log("selected collection", collection);
    form.reset({
      name: collection.name,
      color: collection.color,
    });
  }, [collection]);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Collection</AlertDialogTitle>

          <div className="py-4">
            <Form {...form}>
              <form
                id="col-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter collection name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <ToggleGroup
                          value={field.value}
                          type="single"
                          onValueChange={(c) => {
                            field.onChange(c);
                          }}
                        >
                          {DUMMY_COLORS.map((color) => (
                            <ToggleGroupItem key={color} value={color}>
                              <div
                                style={{ backgroundColor: color }}
                                className="w-4 h-4 rounded-full"
                              ></div>
                            </ToggleGroupItem>
                          ))}
                        </ToggleGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" form="col-form" disabled={isAPILoading}>
              {collection ? "Update" : "Create"}
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
