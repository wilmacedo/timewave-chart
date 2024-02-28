import { ComponentProps } from "react";

export function Box({ children, ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className="relative">
      <div className="absolute -z-10 w-full h-full border-2 border-[#070707] bg-[rgb(36,36,36)] animate-show-box" />
      <div className="p-4 bg-white border-2 border-[#303030]">{children}</div>
    </div>
  );
}
