import React, { FC } from "react";
import clsx from "clsx";

export type InputType = JSX.IntrinsicElements["input"] & {
  icon?: React.ReactNode;
};

export const Input: FC<InputType> = ({ icon, className, ...rest }) => {
  return (
    <div className="relative">
      <input
        type="email"
        className={clsx(
          className,
          icon && "ps-11",
          "peer py-3 px-4 block bg-[#E8E8E8] border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600 outline-none"
        )}
        {...rest}
      />
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
        <span className="flex-shrink-0 w-4 h-4 text-gray-500">{icon}</span>
      </div>
    </div>
  );
};
