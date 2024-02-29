import { tokens } from "@/config/mock";
import { formatDate } from "@/utils/format-date";
import { numberToCurrency } from "@/utils/number-to-currency";
import { TooltipProps } from "recharts";
import { NameType } from "recharts/types/component/DefaultTooltipContent";
import { ValueType } from "tailwindcss/types/config";

export function ChartTooltip({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  function getTokenName(id: string) {
    return tokens[id] || "N/A";
  }

  return (
    <div className="flex flex-col py-2 px-3 bg-[#E0E0E0] border border-[#9E9E9E] rounded shadow-md">
      <span className="mb-3 text-xs font-bold">
        {formatDate(payload[0].payload.timestamp)}
      </span>

      <p className="mb-1 inline-flex text-xs font-bold items-center gap-2">
        <div className="inline-flex items-center gap-1">
          <div className="bg-[#233BFF] h-3 w-3 rounded-full" />
          <span className="text-[#757575]">
            {getTokenName(payload[0].payload.token1)}:
          </span>
        </div>

        <span className="text-black">
          {numberToCurrency(payload[0].value ?? 0)}
        </span>
      </p>
      <p className="inline-flex text-xs font-bold items-center gap-2">
        <div className="inline-flex items-center gap-1">
          <div className="bg-[#4FC1F3] h-3 w-3 rounded-full" />
          <span className="text-[#757575]">
            {getTokenName(payload[1].payload.token2)}:
          </span>
        </div>

        <span className="text-black">
          {numberToCurrency(payload[1].value ?? 0)}
        </span>
      </p>
    </div>
  );
}
