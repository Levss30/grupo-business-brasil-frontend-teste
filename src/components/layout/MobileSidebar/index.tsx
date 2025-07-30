"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheetshadcn/sheet";
import { sidebarData } from "@/constants/sidebar-data";
import React from "react";
import { RiLogoutBoxRLine, RiUser3Fill } from "react-icons/ri";
import SidebarItem from "../SidebarItem";

const MobileSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetTitle></SheetTitle>
      <SheetContent side={"left"}>
        <div className="flex flex-col h-full">
          <div className="flex-col gap-4 flex ">
            {sidebarData.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                className="text-slate-800"
              />
            ))}
          </div>
          <div className="border-t border-t-gray-300 w-full pl-3 h-[110px] gap-5 justify-center flex-col flex mt-auto">
            <div className="hover:transform hover:-translate-y-0.5 transition flex gap-4 text-slate-800 cursor-pointer">
              <RiUser3Fill size={24} className="cursor-pointer" />
              <label className="cursor-pointer">Lucas Andres</label>
            </div>
            <div className="flex gap-4 hover:transform hover:-translate-y-0.5 transition text-slate-800 hover:text-red-500 cursor-pointer ">
              <RiLogoutBoxRLine size={24} />
              Sair
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
