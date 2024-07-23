import type { ReactNode, InputHTMLAttributes } from "react";
import cn from "../helper/cn";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = ({ className, ...props }: CheckboxProps): ReactNode => {
  return (
    <div
      className={cn("cursor-pointer bg-orange-400 p-3 rounded-full h-5 w-5")}
    >
      {/* <input type="checkbox" {...props} className={cn("", className)} /> */}
    </div>
  );
};
