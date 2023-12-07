import React, { FC } from "react";
import clsx from "clsx";

export type BadgeProps = JSX.IntrinsicElements["label"] & {
  children: React.ReactNode;
  bgColor: string;
};

export const Badge: FC<BadgeProps> = ({
  children,
  bgColor,
  className,
  ...rest
}) => {
  return (
    <label
      {...rest}
      className={clsx(className, "px-3 py-1 rounded-full text-white")}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </label>
  );
};
