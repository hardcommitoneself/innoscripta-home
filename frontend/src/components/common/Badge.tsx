import React, { FC } from "react";
import clsx from "clsx";

export type BadgeProps = JSX.IntrinsicElements["label"] & {
  children: React.ReactNode;
  bgColor?: "black" | "primary" | "success";
};

export const Badge: FC<BadgeProps> = ({
  children,
  bgColor = "primary",
  className,
  ...rest
}) => {
  return (
    <label
      {...rest}
      className={clsx(
        className,
        bgColor === "success" && "!bg-success",
        bgColor === "primary" && "!bg-primary",
        bgColor === "black" && "!bg-slate-900",
        "px-3 py-1 rounded-full text-white"
      )}
    >
      {children}
    </label>
  );
};
