interface ChartFooterProps {
  range: string;
}

export function ChartFooter({ range }: ChartFooterProps) {
  const days = range.split("D")[1];

  return (
    <div className="mt-2 ml-auto w-fit h-7 flex items-center border border-[#242424] text-xs">
      <input
        className="w-6 text-center h-7 p-1 font-bold text-[#242424] disabled:cursor-not-allowed disabled:opacity-70"
        disabled
        value={days}
      />

      <span className="py-1.5 px-2 bg-[#242424] text-[#EFEFEF] font-bold">
        d
      </span>
    </div>
  );
}
