import ChartOverview from "@/components/layout/Chart";
import Statistics from "@/components/layout/StatisticsScroll";
import CardComponent from "@/components/ui/Card";
import { BsCurrencyDollar, BsPeopleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoMdBasket } from "react-icons/io";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { HiOutlineTrendingDown } from "react-icons/hi";

export default function Home() {
  return (
    <div className="space-y-8 p-2 md:p-8">
      <div className="flex gap-8 flex-wrap">
        <CardComponent
          title="Total de consumidores"
          icon={BsPeopleFill}
          className="flex-1"
        >
          <div className="flex justify-between">
            3500
            <div className="flex pr-2 text-emerald-500 gap-1">
              12.4%
              <HiOutlineTrendingUp size={18} />
            </div>
          </div>
        </CardComponent>
        <CardComponent
          title="Receita"
          icon={BsCurrencyDollar}
          className="flex-1"
        >
          <div className="flex justify-between">
            15.564
            <div className="flex pr-2 text-emerald-500 gap-1">
              5.2%
              <HiOutlineTrendingUp size={18} />
            </div>
          </div>
        </CardComponent>
        <CardComponent
          title="Total de Pedidos"
          icon={IoMdBasket}
          className="flex-1"
        >
          <div className="flex justify-between">
            55.853
            <div className="flex pr-2 text-red-500 gap-1">
              3.5%
              <HiOutlineTrendingDown size={18} />
            </div>
          </div>
        </CardComponent>
        <CardComponent
          title="Visualizações da pagina"
          icon={FaUsersViewfinder}
          className="flex-1"
        >
          <div className="flex justify-between">
            130.540
            <div className="flex pr-2 text-emerald-500 gap-1">
              10.8%
              <HiOutlineTrendingUp size={18} />
            </div>
          </div>
        </CardComponent>
        <CardComponent
          title="Adicionar dados"
          icon={FaPlus}
          className="flex-1"
        ></CardComponent>
      </div>
      <div className="flex w-full gap-8 flex-wrap">
        <ChartOverview />
        <Statistics />
      </div>
    </div>
  );
}
