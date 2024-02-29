import { tokens } from "@/config/mock";
import { findAvgData } from "@/utils/chart/find-avg-data";
import { findMinMaxData } from "@/utils/chart/find-min-max-data";
import { numberToCurrency } from "@/utils/number-to-currency";
import { PriceChartData } from "./price-chart";

interface PriceLegendProps {
  data: PriceChartData[];
}

export function PriceLegend({ data }: PriceLegendProps) {
  const { min, max } = findMinMaxData(data);
  const avg = findAvgData(data);

  const token1 = tokens[Object.keys(tokens)[0]];
  const token2 = tokens[Object.keys(tokens)[1]];

  return (
    <div className="my-4 mb-12 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 flex flex-row md:flex-col gap-2">
        <div className="inline-flex items-center gap-1">
          <div className="bg-[#233BFF] w-3 h-3 rounded-full" />
          <span className="text-sm font-semibold">{token1}</span>
        </div>

        <div className="inline-flex items-center gap-1">
          <div className="bg-[#4FC1F3] w-3 h-3 rounded-full" />
          <span className="text-sm font-semibold">{token2}</span>
        </div>
      </div>

      <div className="w-full justify-around md:justify-normal md:w-fit inline-flex gap-4">
        <div className="flex flex-col items-end">
          <span className="text-xs color-[#606060]">Max Price</span>
          <span className="text-lg font-bold">{numberToCurrency(max)}</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs color-[#606060]">Min Price</span>
          <span className="text-lg font-bold">{numberToCurrency(min)}</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs color-[#606060]">Average Price</span>
          <span className="text-lg font-bold">{numberToCurrency(avg)}</span>
        </div>
      </div>
    </div>
  );
}
