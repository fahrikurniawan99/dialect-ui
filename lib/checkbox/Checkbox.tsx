import { type ReactNode, useState } from "react";
import cn from "../helper/cn";
import { CheckIcon } from "@heroicons/react/16/solid";

interface CheckboxProps {
  icon?: ReactNode;
}

export const Checkbox = ({ icon }: CheckboxProps): ReactNode => {
  const [checked, setChecked] = useState(false);

  const toogleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      onClick={toogleChecked}
      className={cn(
        "p-[8px] cursor-pointer flex rounded-full w-fit aspect-square transition-all hover:bg-orange-50 active:bg-orange-100"
      )}
    >
      <div
        // onClick={toogleChecked}
        className={cn(
          "w-3.5 border rounded cursor-pointer border-orange-500 aspect-square flex justify-center items-center text-white",
          { "bg-orange-500": checked }
        )}
      >
        {icon ? (
          icon
        ) : (
          <CheckIcon
            className={cn("w-4 aspect-square", {
              hidden: !checked,
            })}
          />
        )}
      </div>
    </div>
  );
};
