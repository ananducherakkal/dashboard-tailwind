import { cn } from "@/utils/shadcn";
import * as React from "react";

const inputVariants = {
  default: {
    parent: "w-full relative h-fit",
    child:
      "px-3 py-2 text-sm bg-input placeholder:text-secondary-foreground outline-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  },
  variant: {
    default: {
      parent: "",
      child:
        "flex h-10 w-full rounded-md border border-border bg-input focus-visible:ring-2 focus-visible:ring-ring",
    },
    transparent: {
      parent: "",
      child:
        "flex h-10 w-full rounded-md bg-transparent text-text-light placeholder:text-text-light-secondary",
    },
  },
  prefix: {
    prefix: {
      parent:
        "h-10 w-full flex rounded-md border border-border text-sm focus-within:ring-2 focus-within:ring-ring overflow-hidden",
      child: "flex-1 h-full",
    },
    suffix: {
      parent:
        "h-10 w-full flex rounded-md border border-border text-sm focus-within:ring-2 focus-within:ring-ring overflow-hidden",
      child: "flex-1 h-full",
    },
    default: { parent: "", child: "" },
  },
  icon: {
    left: "pl-10",
    right: "pr-10",
    default: "",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-6 px-3 min-w-[48px] rounded-xl text-xs border-1",
  },
};

export interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: keyof (typeof inputVariants)["variant"];
  size?: keyof (typeof inputVariants)["size"];
  iconPosition?: keyof (typeof inputVariants)["icon"];
  prefix?: string;
  suffix?: string;
  icon?: React.ReactElement<any>;
  type?: string;
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      children,
      className,
      inputClassName,
      variant = "default",
      size = "default",
      prefix,
      suffix,
      icon,
      iconPosition = "default",
      type = "text",
      ...props
    },
    ref
  ) => {
    const getPrefixText = () => {
      return prefix ? "prefix" : suffix ? "suffix" : "default";
    };

    const defaultParentClassName = inputVariants.default.parent;
    const defaultChildClassName = inputVariants.default.child;
    const variantParentClassName = inputVariants.variant[variant].parent;
    const variantChildClassName = inputVariants.variant[variant].child;
    const prefixParentClassName = inputVariants.prefix[getPrefixText()].parent;
    const prefixChildClassName = inputVariants.prefix[getPrefixText()].child;
    const iconChildClassName = inputVariants.icon[iconPosition];
    const sizeChildClassName = inputVariants.size[size];

    return (
      <div
        className={cn(
          defaultParentClassName,
          variantParentClassName,
          prefixParentClassName,
          className
        )}
      >
        {prefix && (
          <div className="h-full px-3 bg-input outline-none flex justify-center items-center">
            {prefix}
          </div>
        )}
        <input
          type={type}
          className={cn(
            defaultChildClassName,
            variantChildClassName,
            prefixChildClassName,
            sizeChildClassName,
            iconChildClassName,
            inputClassName
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className={`absolute h-6 w-6 top-1/2 -translate-y-1/2 ${
              iconPosition === "left" ? "left-2" : "right-2"
            }`}
          >
            {icon}
          </div>
        )}
        {suffix && (
          <div className="h-full px-3 bg-muted-foreground outline-none flex justify-center items-center">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
