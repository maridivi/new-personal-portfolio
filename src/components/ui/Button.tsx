"use client";

import cn from "@/utils/cn";
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
  Arrow,
} from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export default function Button({
  onClick,
  children,
  tooltipContent,
  isFavorite,
  className,
}: {
  onClick?: () => void;
  children?: ReactNode;
  tooltipContent?: string;
  isFavorite?: boolean;
  className?: string;
}) {
  if (!tooltipContent) {
    // If tooltipContent is not provided, render the button without the Tooltip
    return (
      <div className="rounded-md bg-violet-100 p-2 text-violet-500">
        <button onClick={onClick} className={cn(className, "flex gap-1")}>
          {children}
        </button>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              isFavorite ? "text-beige-500" : "text-gray-500",
              className
            )}
          >
            {children}
          </button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            sideOffset={4}
            className={cn(
              "text-beige-200 select-none rounded-md bg-white px-[10px] py-[7px] text-sm leading-none shadow-md",
              "z-[999]"
            )}
          >
            {tooltipContent}
            <Arrow className="fill-white" />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
}
