"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Cardshadcn/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/Chartshadcn/chart";
import { BsCurrencyDollar } from "react-icons/bs";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const ChartOverview = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 312, mobile: 200 },
    { month: "Agust", desktop: 234, mobile: 180 },
    { month: "September", desktop: 204, mobile: 130 },
    { month: "Octuber", desktop: 94, mobile: 100 },
    { month: "November", desktop: 154, mobile: 130 },
    { month: "Dezember", desktop: 174, mobile: 120 },
  ];

  const chartConfig = {
    desktop: {
      label: "GroupBusiness",
      color: "#2563eb",
    },
    mobile: {
      label: "OtherGroups",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <Card className="w-full hover:transform border-[1px] flex-1 hover:-translate-y-0.5 hover:border-cyan-600 transition">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-lg sm:text-xl  text-slate-800">
            Visão geral de vendas
          </CardTitle>
          <BsCurrencyDollar size={24} className="text-slate-800" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartOverview;
