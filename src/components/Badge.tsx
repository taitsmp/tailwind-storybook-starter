import React from "react";
import { IBadge } from "../@interfaces";
import classNames from "classnames";

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  variant: BadgeVariant;
  size: BadgeSize;
  children: string | React.ReactElement;
  className?: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
}

const BadgeVariantClasses: Record<BadgeVariant, string> = {
  gray: "badge-gray",
  primary: "badge-primary",
  error: "badge-error",
  warning: "badge-warning",
  success: "badge-success",
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};

// https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc

export const Badge: React.FC<BadgeProps> = ({
  variant,
  size = "md",
  LeadingIcon,
  TrailingIcon,
  className,
  children,
}) => {
  const BadgeVariantClassName = BadgeVariantClasses[variant]; //why caps?
  const BadgeVariantSizeClassName = BadgeSizeClasses[size];

  return (
    <div
      className={classNames(
        "badge-base",
        BadgeVariantClassName,
        BadgeVariantSizeClassName,
        className,
      )}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames("mr-1.5", LeadingIcon.props.className)}
        />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames("mr-1.5", TrailingIcon.props.className)}
        />
      ) : null}
    </div>
  );
};

export const BadgeOld = ({ badge }: { badge: IBadge }) => {
  return (
    <div
      className={`${badge.size} ${badge.color} rounded-full inline-flex flex-row`}
    >
      <div className="">icon here</div>
      <div>{badge.label}</div>
    </div>
  );
};