"use client";
import React from "react";
interface SidebarItemProps {
  icon?: React.ElementType;
  text?: string;
  className?: string;
}

const SidebarItem = ({ icon: Icon, text, className }: SidebarItemProps) => {
  return (
    <ul>
      <li
        className={`h-[50px] flex items-center pl-2 pr-8 gap-3 text-slate-300 cursor-pointer hover:transform hover:-translate-y-1 hover:bg-slate-200/20 rounded transition ${className}`}
      >
        {Icon && <Icon size={24} />} {text}
      </li>
    </ul>
  );
};

export default SidebarItem;
