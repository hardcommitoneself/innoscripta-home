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
        "py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      )}
    >
      {children}
    </button>
  );
};
