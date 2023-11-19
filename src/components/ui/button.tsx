import { cn } from "@/utils/className";
import * as React from "react";

const buttonVariants = {
  default:
    "inline-flex items-center justify-center font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  variant: {
    default:
      "bg-primary text-text border-2 border-primary hover:opacity-80 active:opacity-100 active:bg-white active:text-primary",
    secondary:
      "bg-primary text-text border-2 border-primary hover:opacity-80 active:opacity-100 active:bg-white active:text-primary",
    "outline-light":
      "bg-transparent text-text-light border-2 border-text-light hover:bg-text-light/10 active:opacity-100 active:bg-text-light/20",
  },
  size: {
    default: "h-10 px-4 py-2",
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
