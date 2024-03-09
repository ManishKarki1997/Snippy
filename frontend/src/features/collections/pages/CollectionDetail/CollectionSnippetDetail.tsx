import { APP_ICONS } from "@/components/shared/AppIcons";
import { CodeEditor } from "@/components/shared/CodeEditor";
import { Button } from "@/components/ui/button";
import { useSnippetDetail } from "@/features/snippets/hooks/useSnippetDetail";
import React from "react";

export const CollectionSnippetDetail = () => {
  const { selectedSnippet } = useSnippetDetail();

  if (!selectedSnippet) {
    return (
      <div className="px-4 py-4 w-full h-32 text-center flex items-center justify-center">
        <div className="mx-8 my-8 py-8 rounded border border-dashed border-primary w-full">
          <h2 className="font-normal text-lg">No snippet selected</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="w-full flex items-center justify-between gap-2 border-b border-gray-200 px-4 py-2">
        <h2 className="font-normal text-lg">{selectedSnippet.title}</h2>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost">{APP_ICONS.HEART({})}</Button>
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="text-lg">{selectedSnippet.description}</h2>

        <div className="mt-6">
          <CodeEditor height="70vh" />
        </div>
      </div>
    </div>
  );
};
