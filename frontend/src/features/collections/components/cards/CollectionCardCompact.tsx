import React from "react";
import { ICollection } from "../../types/CollectionType";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { APP_ICONS } from "@/components/shared/AppIcons";

interface Props {
  collection: ICollection;
  onEdit: (collection: ICollection) => void;
}

export const CollectionCardCompact = ({ collection, onEdit }: Props) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(`/app/collections/${collection}`)}
      className="group flex  w-full items-center justify-start gap-2 font-normal"
    >
      {APP_ICONS.FOLDER({ color: collection.color })}
      {collection.name}
      <div
        // size="icon"
        // variant="ghost"
        className=" ml-auto invisible group-hover:visible"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(collection);
        }}
      >
        {APP_ICONS.EDIT_NOTE({})}
      </div>
    </Button>
  );
};
