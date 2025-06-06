import { cn } from "@/lib/utils";
import React from "react";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
}

export function Preview({
  children,
  className,
  ...props
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "min-h-96 place-content-center rounded-md border border-[#f3f3f3] dark:border-[#232323] bg-[#f7f7f7] dark:bg-[#1a1a1a] p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
