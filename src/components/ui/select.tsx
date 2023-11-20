import { cn } from "@/utils/shadcn";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectProps } from "@radix-ui/react-select";
import {
  SelectGroup,
  SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./selectRoot";

export type SelectOptions = Array<{
  label: string;
  value: string;
}>;

export interface SelectPropsNext extends SelectProps {
  className?: string;
  selectClassName?: string;
  placeholder?: string;
  options: SelectOptions;
  // onChange?: SelectProps["onValueChange"];
}

function Select({
  className,
  selectClassName,
  placeholder,
  options,
  ...props
}: SelectPropsNext) {
  return (
    <div className={cn("w-full relative", className)}>
      <SelectRoot {...props}>
        <SelectTrigger
          className={cn(
            "w-full text-sm [&>span]:text-sm border-border bg-input",
            selectClassName
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </div>
  );
}

export default Select;
