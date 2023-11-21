import { cn } from "@/utils/shadcn";
import * as React from "react";

const buttonVariants = {
  default: "",
  variant: {
    default:
      "bg-primary text-text border-2 border-primary hover:bg-primary/80 hover:border-primary/80 active:bg-transparent active:text-primary rounded-md",
    secondary:
      "bg-transparent text-text-light border-2 border-text-light hover:bg-text-light/10 active:opacity-100 active:bg-text-light/20",
    "outline-light":
      "bg-transparent text-text-light border-2 border-text-light hover:bg-text-light/10 active:opacity-100 active:bg-text-light/20 rounded-md",
  },
  size: {
    default: "h-14 font-lg px-4 py-2 font-semibold",
    sm: "h-6 px-3 min-w-[48px] rounded-xl text-xs border-1",
  },
};

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof (typeof buttonVariants)["variant"];
  size?: keyof (typeof buttonVariants)["size"];
}

export default function Button(props: IButtonProps) {
  const { children, className, variant = "default", size = "default" } = props;

  const defaultClassName = buttonVariants.default;
  const variantClassName = buttonVariants.variant[variant];
  const sizeClassName = buttonVariants.size[size];

  return (
    <button
      className={cn(
        defaultClassName,
        variantClassName,
        sizeClassName,
        className
      )}
    >
      {children}
    </button>
  );
}
