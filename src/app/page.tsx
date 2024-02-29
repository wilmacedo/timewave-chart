import { Box } from "@/components/box";
import { ChartFooter } from "@/components/charts/chart-footer";
import { PriceChart } from "@/components/charts/price-chart";
import { PriceLegend } from "@/components/charts/price-legend";
import { CHAIN_ID, TIME_RANGE, tokens } from "@/config/mock";
import { getChartData } from "@/services/get-chart-data";
import { formatPriceData } from "@/utils/chart/format-price-data";

export default async function Main() {
  const data = await getChartData({
    chainId: CHAIN_ID,
    tokenPair: [Object.keys(tokens)[0], Object.keys(tokens)[1]],
    range: TIME_RANGE,
  });

  const formattedData = formatPriceData(data.result.data.json);

  return (
    <main className="pt-14 px-8 md:px-16 sm:pt-20">
      <div className="w-full mx-auto lg:max-w-5xl space-y-8">
        <Box>
          <h3 className="color-[#242424] font-bold text-xl">
            Value Comparison
          </h3>

          <PriceLegend data={formattedData} />

          <div className="h-[350px] w-full">
            <PriceChart data={formattedData} />
          </div>

          <ChartFooter range={TIME_RANGE} />
        </Box>
      </div>
    </main>
  );
}
