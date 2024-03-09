import moment from "moment";

import { APP_ICONS } from "@/components/shared/AppIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ISnippet } from "../types/snippet";
import { useSnippetDetail } from "../hooks/useSnippetDetail";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  snippet: ISnippet;
}

export const CollectionSnippetCard = ({ snippet }: Props) => {
  const { selectSnippet, selectedSnippet } = useSnippetDetail();
  const navigate = useNavigate();
  const { colId } = useParams();

  const isSnippetSelected = selectedSnippet?.title === snippet.title;

  const handleSelectSnippet = () => {
    selectSnippet(snippet);
    navigate(`/app/collections/${colId}/${snippet.title}`);
  };

  return (
    <div
      className={cn(
        " px-4 py-4 rounded shadow cursor-pointer",
        isSnippetSelected ? "bg-blue-500" : "bg-background"
      )}
      onClick={() => handleSelectSnippet()}
    >
      <div className="flex items-start gap-4">
        <div className="min-w-[1rem]">
          {APP_ICONS.CODE({ color: isSnippetSelected ? "white" : "" })}
        </div>

        <div className={cn("-mt-1", isSnippetSelected ? "text-white" : "")}>
          <div className="flex items-start gap-2 justify-between">
            <h2 className="font-normal text-[15px] line-clamp-1">
              {snippet.title}
            </h2>
          </div>
          <h2
            className={cn(
              "font-normal  text-[15px] line-clamp-2",
              isSnippetSelected ? "text-white" : "text-muted-foreground"
            )}
          >
            {snippet.description}
          </h2>

          <div className="flex items-center flex-wrap mt-4 gap-2">
            {snippet.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={cn(
                  "font-normal",
                  isSnippetSelected ? "text-white" : ""
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="min-w-[3rem] text-right">
          <Button variant="ghost" size={"icon"}>
            {APP_ICONS.HEART({
              size: 14,
              color: isSnippetSelected ? "white" : "",
            })}
          </Button>
        </div>
      </div>
    </div>
  );
};
