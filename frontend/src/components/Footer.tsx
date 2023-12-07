import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="bg-primary text-white w-full mt-20 py-10">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="flex justify-center gap-2">
          <span>&copy;</span>
          <p>2023 News. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
