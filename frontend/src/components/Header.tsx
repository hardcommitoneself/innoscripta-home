import React from "react";
import { NavBar, NavItem } from "./Nav";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Header: React.FC = () => {
  return (
    <div className="sticky flex items-center h-[66px] top-0 z-50 w-full py-2">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="font-bold text-3xl">
            Innoscripta <span className="text-primary">BLOG</span>
          </a>
          <div className="inline-flex items-center gap-5">
            <NavBar>
              <NavItem to="/article">Article</NavItem>
              <NavItem to="setting">Setting</NavItem>
            </NavBar>
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
