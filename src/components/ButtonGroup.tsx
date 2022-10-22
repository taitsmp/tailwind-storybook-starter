import React from "react";
import classNames from "classnames";

export interface BGProps {
  text?: string[];
  Icons?: React.ReactElement;
  children: string | React.ReactElement;
  className?: string;
  active: number;
}

export const ButtonGroup = ({
  className,
  text,
  Icons,
  children,
  active,
}: BGProps) => {
  return <div className={classNames("buttonGroup-base", className)}></div>;
};
