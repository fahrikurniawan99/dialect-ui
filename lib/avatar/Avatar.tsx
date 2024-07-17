import cn from "../helper/cn";
import type { ReactNode } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  notification?: boolean;
  notificationClassName?: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar = ({
  alt,
  src,
  className,
  notification = false,
  size = "md",
  notificationClassName,
  onClick,
}: AvatarProps): ReactNode => {
  const sizeMD = 48;
  return (
    <div
      onClick={onClick}
      className={cn("w-fit aspect-square rounded-full relative", className)}
    >
      <img
        alt={alt}
        src={src}
        width={sizeMD}
        className="rounded-full"
        height={sizeMD}
      />
      <div
        className={cn(
          "absolute top-0 right-0 rounded-full bg-orange-600 size-[12px]",
          notificationClassName,
          {
            hidden: notification === false,
          }
        )}
      ></div>
    </div>
  );
};
