"use client";
import { IStatistic } from "@/constants/statistic-data";
import React from "react";
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from "react-icons/hi";
interface StatisticsItemProps {
  item?: IStatistic;
}

const StatisticsItem = ({ item }: StatisticsItemProps) => {
  const isNegative = item?.value.includes("-");

  return (
    <div className="text-sm font-semibold border-b pb-1">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div
            className={`${
              isNegative ? "bg-red-500" : "bg-green-500"
            } h-[5px] w-[5px] rounded`}
          ></div>
          {item?.text}
        </div>
        <div
          className={`${
            isNegative ? "text-red-500" : "text-emerald-500"
          } flex pr-2 gap-1`}
        >
          {item?.value}

          {isNegative ? (
            <HiOutlineTrendingDown size={18} />
          ) : (
            <HiOutlineTrendingUp size={18} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsItem;
