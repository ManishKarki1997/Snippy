import React from "react";
import { SearchCollection } from "../../components/CollectionDetail/SearchCollection";
import { Button } from "@/components/ui/button";
import { APP_ICONS } from "@/components/shared/AppIcons";
import { CollectionSnippetCard } from "@/features/snippets/components/CollectionSnippetCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DUMMY_SNIPPETS } from "@/features/snippets/data/DummySnippets";
import { ISnippet } from "@/features/snippets/types/snippet";

interface Props {
  // onSelectSnippet: (snippet: ISnippet) => void;
}

export const CollectionDetailSnippetsPane = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2 py-4 px-4 bg-background">
        <SearchCollection />
        <Button variant="outline">{APP_ICONS.PLUS({ size: 14 })}</Button>
      </div>

      <ScrollArea className="h-[95vh] px-4">
        <div className="flex flex-col space-y-4 pb-10">
          {DUMMY_SNIPPETS.map((snippet) => (
            <CollectionSnippetCard key={snippet.title} snippet={snippet} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
