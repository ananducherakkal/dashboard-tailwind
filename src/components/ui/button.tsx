import { cn } from "@/utils/shadcn";
import * as React from "react";

const buttonVariants = {
  default: "",
  variant: {
    default:
      "bg-primary text-text border-2 border-primary hover:bg-primary/80 hover:border-primary/80 active:bg-transparent active:text-primary rounded-md",
    secondary:
      "bg-gray-70 text-text-light-secondary border-2 border-gray-70 hover:bg-gray-70/80 hover:border-gray-70/80 active:bg-transparent active:text-gray-70 rounded-md",
    "outline-light":
      "bg-transparent text-text-light border-2 border-text-light-secondary hover:border-text-light active:opacity-100 active:bg-text-light/20 rounded-md",
    outline:
      "bg-transparent text-text dark:text-text-light border-2 border-text-secondary dark:border-text-light-secondary hover:border-text dark:hover:border-text-light active:opacity-100 active:bg-text/20 dark:active:bg-text-light/20 rounded-md",
    transparent:
      "bg-transparent text-text-light-secondary hover:text-text-light active:text-text-light/80",
  },
  size: {
    default: "h-14 text-base px-4 py-2 font-semibold",
    sm: "h-6 px-3 min-w-[48px] rounded-xl text-xs",
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
