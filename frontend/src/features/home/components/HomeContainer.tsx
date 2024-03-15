import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const HomeContainer = ({ children, className }: Props) => {
  return <div className={classNames("container", className)}>{children}</div>;
};
