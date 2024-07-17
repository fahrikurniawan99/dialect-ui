import cn from "../helper/cn";
import type { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "borderless" | "rounded";
  color?: "primary" | "secondary" | "dark";
}

export const Button = ({
  className,
  children,
  variant = "filled",
  color = "primary",
  ...props
}: ButtonProps): ReactNode => {
  return (
    <button
      className={cn(
        "text-sm tracking-wide font-medium px-3.5 py-2 rounded min-w-[90px] w-fit flex justify-center items-center transition-all active:scale-95 disabled:cursor-not-allowed disabled:active:scale-100",
        {
          "bg-orange-500 text-gray-50 hover:bg-orange-400 disabled:bg-orange-300":
            variant === "filled" && color === "primary",
          "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-gray-50 disabled:text-orange-300 disabled:border-orange-300 disabled:hover:bg-transparent":
            variant === "outlined" && color === "primary",
          "bg-transparent text-orange-500 hover:bg-orange-100 font-semibold px-[15px] py-[9px] disabled:text-orange-300 disabled:hover:bg-transparent":
            variant === "borderless" && color === "primary",
          "bg-orange-500 text-gray-50 hover:bg-orange-400 disabled:bg-orange-300 rounded-full":
            variant === "rounded" && color === "primary",
        },
        {
          "bg-blue-500 text-gray-50 hover:bg-blue-400 disabled:bg-blue-300":
            variant === "filled" && color === "secondary",
          "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-50 disabled:text-blue-300 disabled:border-blue-300 disabled:hover:bg-transparent":
            variant === "outlined" && color === "secondary",
          "bg-transparent text-blue-500 hover:bg-blue-100 font-semibold px-[15px] py-[9px] disabled:text-blue-300 disabled:hover:bg-transparent":
            variant === "borderless" && color === "secondary",
          "bg-blue-500 text-gray-50 hover:bg-blue-400 disabled:bg-blue-300 rounded-full":
            variant === "rounded" && color === "secondary",
        },
        {
          "bg-gray-700 text-gray-50 hover:bg-gray-600 disabled:bg-gray-300":
            variant === "filled" && color === "dark",
          "border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-50 disabled:text-gray-300 disabled:border-gray-300 disabled:hover:bg-transparent":
            variant === "outlined" && color === "dark",
          "bg-transparent text-gray-700 hover:bg-gray-100 font-semibold px-[15px] py-[9px] disabled:text-gray-300 disabled:hover:bg-transparent":
            variant === "borderless" && color === "dark",
          "bg-gray-700 text-gray-50 hover:bg-gray-600 disabled:bg-gray-300 rounded-full":
            variant === "rounded" && color === "dark",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
