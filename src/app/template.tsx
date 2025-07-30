import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import React from "react";

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
