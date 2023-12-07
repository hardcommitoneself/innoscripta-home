import React, { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

export type NavItemType = JSX.IntrinsicElements["a"] & {
  current?: boolean;
  children: React.ReactNode;
  to: string;
};

export const NavItem: FC<NavItemType> = ({
  className,
  current,
  children,
  ref,
  to,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      to={to}
      className={clsx(
        className,
        current && "text-primary",
        "border-0 font-medium"
      )}
    >
      {children}
    </Link>
  );
};

export interface NavBarProps {
  children: React.ReactNode;
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className, children }) => {
  return (
    <div className={clsx(className, "inline-flex gap-5 items-center")}>
      {children}
    </div>
  );
};
