import React, { FC } from "react";
import clsx from "clsx";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export type InputType = JSX.IntrinsicElements["input"] & {
  search?: boolean;
  rounded?: boolean;
  block?: boolean;
};

export const Input: FC<InputType> = ({
  className,
  search = false,
  rounded,
  block = false,
  ...rest
}) => {
  return (
    <div className="inline-flex items-center relative">
      {search && (
        <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-500" />
      )}
      <input
        {...rest}
        className={clsx(
          className,
          block && "w-full block",
          (rounded && "rounded-full") || "rounded-md",
          search === true ? "pl-10" : "pl-3",
          "pr-3 py-1 border"
        )}
      />
    </div>
  );
};
