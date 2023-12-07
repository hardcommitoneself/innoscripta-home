import React, { FC } from "react";
import clsx from "clsx";

export type CategoryItemProps = JSX.IntrinsicElements["button"] & {
  children: React.ReactNode;
  current?: boolean;
};

export const CategoryItem: FC<CategoryItemProps> = ({
  current = false,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        current && "!text-primary font-bold",
        "text-slate-500"
      )}
    >
      {children}
    </button>
  );
};

export type CategoryBarProps = {
  children: React.ReactNode;
  className?: string;
};

export const CategoryBar: FC<CategoryBarProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        className,
        "overflow-x-auto whitespace-nowrap inline-flex items-center gap-10"
      )}
    >
      {children}
    </div>
  );
};
