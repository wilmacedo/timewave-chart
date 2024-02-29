import { Box } from "@/components/box";
import { PriceChart } from "@/components/charts/price-chart";
import { getChartData } from "@/services/get-chart-data";
import { formatPriceData } from "@/utils/chart/format-price-data";

export default async function Main() {
  const data = await getChartData({
    chainId: "neutron-1",
    tokenPair: [
      "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      "untrn",
    ],
    range: "D7",
  });

  const formattedData = formatPriceData(data.result.data.json);

  return (
    <main className="pt-14 px-8 md:px-16 sm:pt-20">
      <div className="w-full mx-auto lg:max-w-5xl space-y-8">
        <h1 className="text-3xl font-semibold">Details for ATOM/NTRN</h1>

        <Box>
          <h3 className="color-[#242424] font-bold text-xl">
            Value Comparison
          </h3>

          <div className="h-[350px] w-full">
            <PriceChart data={formattedData} />
          </div>
        </Box>
      </div>
    </main>
  );
}
