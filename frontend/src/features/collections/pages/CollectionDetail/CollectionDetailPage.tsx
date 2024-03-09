import React from "react";
import { CollectionDetailSnippetsPane } from "./CollectionDetailSnippetsPane";
import { CollectionSnippetDetail } from "./CollectionSnippetDetail";
import SnippetDetailContext, {
  SnippetDetailProvider,
} from "@/features/snippets/hooks/useSnippetDetail";
import { ISnippet } from "@/features/snippets/types/snippet";

export const CollectionDetailPage = () => {
  return (
    <SnippetDetailProvider>
      <div className="h-screen overflow-hidden">
        <div className="grid grid-cols-12 w-full min-h-screen">
          <div className="col-span-12 lg:col-span-4  border border-r border-gray-200">
            <CollectionDetailSnippetsPane />
          </div>
          <div className="col-span-12 lg:col-span-8 bg-background">
            <CollectionSnippetDetail />
          </div>
        </div>
      </div>
    </SnippetDetailProvider>
  );
};
