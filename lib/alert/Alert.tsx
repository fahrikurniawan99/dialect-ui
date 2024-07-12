import React from "react";
import cn from "../helper/cn";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/16/solid";

interface AlertProps {
  message: string;
  color?: "main" | "success" | "warning" | "error" | "info";
  className?: string;
  onClose?: () => void;
}

export const Alert = ({
  message,
  color = "main",
  className,
  onClose,
}: AlertProps) => (
  <div
    className={cn(
      "flex w-full max-w-[400px] items-center py-3.5 border px-4 font-medium text-sm rounded-md",
      className,
      {
        "bg-gray-100 text-gray-700 border-gray-300": color === "main",
        "bg-green-100 text-green-700 border-green-300": color === "success",
        "bg-orange-100 text-orange-700 border-orange-300": color === "warning",
        "bg-red-100 text-red-700 border-red-300": color === "error",
        "bg-blue-100 text-blue-700 border-blue-300": color === "info",
      }
    )}
  >
    <InformationCircleIcon className="size-5 mr-1" /> {message}{" "}
    <button className="ml-auto">
      <XMarkIcon
        onClick={onClose}
        className={cn("size-5", {
          "text-gray-500": color === "main",
          "text-green-500": color === "success",
          "text-orange-500": color === "warning",
          "text-red-500": color === "error",
          "text-blue-500": color === "info",
        })}
      />
    </button>
  </div>
);
