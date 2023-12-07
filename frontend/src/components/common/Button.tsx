import React, { FC } from "react";
import clsx from "clsx";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  children: React.ReactNode;
  bgColor?: "black" | "primary" | "success";
  block?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  bgColor = "primary",
  className,
  block = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        block && "w-full block",
        bgColor === "success" && "!bg-success",
        bgColor === "primary" && "!bg-primary",
        bgColor === "black" && "!bg-slate-900",
        "px-5 py-1 rounded-full text-white active:opacity-50 hover:ring-4 hover:outline-none hover:ring-cyan-30"
      )}
    >
      {children}
    </button>
  );
};
