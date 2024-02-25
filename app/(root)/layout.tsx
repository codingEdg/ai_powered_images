import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log("layout in root folder");
  return (
    <main className="root">
      <Sidebar />
      {/* <MobileNavi /> */}

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
