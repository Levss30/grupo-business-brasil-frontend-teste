import { ScrollArea } from "@/components/ui/ScrollArea/scroll-area";
import { statisticData } from "@/constants/statistic-data";
import StatisticsItem from "../StatisticsItem";

const Statistics = () => {
  return (
    <div className="flex-1">
      <ScrollArea className="border-[1px] shadow rounded-xl hover:transform hover:-translate-y-0.5 hover:border-cyan-600 transition">
        <div className="p-5 justify-center">
          <p className="flex text-lg font-bold mt-2 mb-5 text-slate-800">
            Vendas por País
          </p>
          {statisticData.map((item, index) => (
            <div key={index} className="p-2">
              <StatisticsItem item={item} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Statistics;
