import { APP_ICONS } from "@/components/shared/AppIcons";
import { AppLogo } from "@/components/shared/AppLogo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Collections = [
  "Node",
  "Framer Motion",
  "React",
  "Vue",
  "Linux",
  "Window Managers",
];

const Tags = ["Javascript", "Go", "Animations", "Utility", "Snippets"];

const Colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppSidebar = ({ className }: SidebarProps) => {
  // const navigation = useNavigate();

  return (
    <div
      className={cn(
        "pb-12 max-w-72 border border-r border-gray-200 bg-background",
        className
      )}
    >
      <div className="px-4 py-4">
        <Link to="/">
          <AppLogo />
        </Link>
      </div>

      <Separator />

      <div className="space-y-4 px-4 py-3">
        <div className="">
          {/* <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Navigation
          </h2> */}
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start items-center gap-2"
            >
              {APP_ICONS.HOME({})}
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start items-center gap-2"
            >
              {APP_ICONS.GLOBE({})}
              Browse
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start items-center gap-2"
            >
              {APP_ICONS.ASTRONAUT({})}
              Profile
            </Button>
          </div>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 justify-between">
            <h2 className="relative text-md font-medium tracking-wide">
              Collections
            </h2>

            <Button variant="ghost" size="sm">
              {APP_ICONS.PLUS({ size: 16 })}
            </Button>
          </div>
          <ScrollArea className="h-[300px] p-0">
            <div className="space-y-1 p-2 -ml-2">
              {Collections?.map((collection, i) => (
                <Link
                  key={`${collection}-${i}`}
                  to={`/app/collections/${collection}`}
                >
                  <Button
                    variant="ghost"
                    className="w-full items-center justify-start gap-2 font-normal"
                  >
                    {APP_ICONS.FOLDER({})}
                    {collection}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>

        <Separator />

        <div>
          <h2 className="relative text-md font-medium tracking-wide">Tags</h2>
          <div className="space-y-1 py-2">
            {Tags.map((tag) => (
              <Button
                key={tag}
                variant="ghost"
                className="w-full justify-start items-center font-medium gap-2"
              >
                <div
                  className={cn(
                    "w-2 h-2 bg-blue-500 rounded-full",
                    Colors[Math.floor(Math.random() * Colors.length)]
                  )}
                ></div>
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
