import React from "react";
import { useAuthContext } from "context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./common";
import { NavBar, NavItem } from "./Nav";

export const Header: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  const { pathname } = useLocation();

  return (
    <div className="sticky flex items-center h-24 top-0 z-50 w-full py-2 bg-[#EFEFEF]">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="font-bold text-4xl">
            INNOSCRIPTA <span className="text-primary">BLOG</span>
          </Link>
          <div className="inline-flex items-center gap-5">
            <NavBar>
              {!isAuthenticated ? (
                <>
                  {pathname === "/login" ? (
                    <NavItem to="register">
                      <Button>Sing Up</Button>
                    </NavItem>
                  ) : (
                    <NavItem to="login">
                      <Button>Sign In</Button>
                    </NavItem>
                  )}
                </>
              ) : (
                <>
                  <NavItem to="settings">Settings</NavItem>
                  <Button>Logout</Button>
                </>
              )}
            </NavBar>
          </div>
        </div>
      </div>
    </div>
  );
};
