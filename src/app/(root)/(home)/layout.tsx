import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      {/* <p className="text-white">Navbar</p> */}
      <div className="flex">
        {/* <p className="text-white">Sidebar</p> */}
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col p-6 pb-6 pt-28 max-md:pb-16 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
