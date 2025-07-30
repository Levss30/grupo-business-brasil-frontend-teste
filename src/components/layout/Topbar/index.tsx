import Input from "@/components/ui/Input";
import Title from "@/components/ui/Title";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import MobileSidebar from "../MobileSidebar";

const Topbar = () => {
  return (
    <aside className="w-full border-r shadow-sm">
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3">
        <Title className="text-lg text-slate-800 hidden md:flex">
          Dashboard
        </Title>
        <div className="md:hidden flex">
          <MobileSidebar>
            <div className="flex md:hidden flex-col gap-1.5 w-[30px]">
              <div className="w-full h-[2px] bg-gray-600" />
              <div className="w-full h-[2px] bg-gray-600" />
              <div className="w-full h-[2px] bg-gray-600" />
            </div>
          </MobileSidebar>
        </div>
        <div className="items-center pr-10 hidden md:flex">
          <CiSearch className="absolute ml-2 text-slate-500" size={24} />
          <Input
            className="w-[480px] h-7 outline-none flex p-4 pl-10 bg-slate-100/80 border-black rounded-full "
            placeholder="Procurar..."
          />
          <FaArrowRight
            className="absolute ml-[445px] text-gray-600 flex cursor-pointer hover:transform hover:text-blue-500 transition"
            size={18}
          />
        </div>
      </div>
    </aside>
  );
};

export default Topbar;
