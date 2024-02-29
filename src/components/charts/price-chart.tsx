"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTick } from "./chart-tick";
import { ChartTooltip } from "./chart-tooltip";

export interface PriceChartData {
  timestamp: number;
  [key: string]: number | string;
}

interface PriceChartProps {
  data: PriceChartData[];
}

export function PriceChart({ data }: PriceChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="price1Gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#233BFF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#233BFF" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="price2Gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4FC1F3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4FC1F3" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tickLine={false}
          interval={Math.ceil(data.length / 4)}
          tick={(props: any) => <ChartTick type="date" {...props} />}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={(props: any) => <ChartTick type="price" {...props} />}
        />

        <CartesianGrid vertical={false} strokeWidth={0.5} stroke="#ccc" />

        <Tooltip
          content={(props: any) => <ChartTooltip {...props} />}
          cursor={{ stroke: "#A3A3A3", strokeWidth: 1, strokeDasharray: "2 2" }}
        />

        <Area stroke="#233BFF" fill="url(#price1Gradient)" dataKey="prices1" />
        <Area stroke="#4FC1F3" fill="url(#price2Gradient)" dataKey="prices2" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
