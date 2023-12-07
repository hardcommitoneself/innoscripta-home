import React from "react";
import { NavBar, NavItem } from "./Nav";

export const Header: React.FC = () => {
  return (
    <div className="sticky flex items-center h-24 top-0 z-50 w-full py-2">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="font-bold text-4xl">
            INNOSCRIPTA <span className="text-primary">BLOG</span>
          </a>
          <div className="inline-flex items-center gap-5">
            <NavBar>
              <NavItem to="setting">Setting</NavItem>
              <NavItem to="login">Sing In</NavItem>
            </NavBar>
          </div>
        </div>
      </div>
    </div>
  );
};
