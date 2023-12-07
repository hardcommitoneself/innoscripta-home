import React, { FC } from "react";
import clsx from "clsx";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx(className, "rounded-md shadow bg-white border p-2")}>
      {children}
    </div>
  );
};
