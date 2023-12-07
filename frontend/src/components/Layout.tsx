import React, { FC } from "react";
import { Outlet } from "react-router";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <main className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 relavie">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
