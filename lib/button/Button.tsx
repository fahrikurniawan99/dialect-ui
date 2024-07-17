import type { ReactNode } from "react";

export const Button = (): ReactNode => {
  return (
    <button className="bg-orange-600 text-gray-50 py-2 rounded-md font-medium px-5 text-sm">
      This is button
    </button>
  );
};
