import { numberToCurrency } from "@/utils/number-to-currency";

interface ChartTickProps {
  type: "number" | "date" | "price";
  x: number;
  y: number;
  payload: {
    value: number;
  };
}

export function ChartTick({ type, x, y, payload }: ChartTickProps) {
  function formatXAxis(timestamp: number) {
    return String(new Date(timestamp * 1000).getDate());
  }

  const props = {
    x,
    y,
    dy: 16,
    textAnchor: "middle",
    fill: "#4A4A4A",
    className: "text-xs font-bold",
  };

  if (type === "date") {
    return <text {...props}>{formatXAxis(payload.value)}</text>;
  }

  if (type === "price") {
    return <text {...props}>{numberToCurrency(payload.value)}</text>;
  }

  return <text {...props}>{payload.value}</text>;
}
