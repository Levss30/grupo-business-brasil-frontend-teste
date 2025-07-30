"use client";
import Logo from "@/assets/Logotipo.png";
import { sidebarData } from "@/constants/sidebar-data";
import Image from "next/image";
import { RiLogoutBoxRLine, RiUser3Fill } from "react-icons/ri";
import SidebarItem from "../SidebarItem";

const Sidebar = () => {
  return (
    <aside className="h-screen w-[200px] p-2 md:flex hidden flex-col items-center bg-gray-900 border-r shadow-sm">
      <div className="w-[200px]">
        <Image src={Logo} alt="Grupo Business Brasil" />
      </div>
      <nav className="">
        <div className="flex-col gap-4 pt-9 flex">
          {sidebarData.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </nav>
      <div className="border-t border-t-gray-800 w-full pl-3 h-[110px] gap-5 justify-center flex-col flex mt-auto">
        <div className="hover:transform hover:-translate-y-0.5 transition flex gap-4 text-slate-300 cursor-pointer">
          <RiUser3Fill size={24} className="cursor-pointer" />
          <label className="cursor-pointer">Lucas Andres</label>
        </div>
        <div className="flex shadow-sm gap-4 hover:transform hover:-translate-y-0.5 transition text-slate-300 hover:text-red-500 cursor-pointer ">
          <RiLogoutBoxRLine size={24}></RiLogoutBoxRLine>
          Sair
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
