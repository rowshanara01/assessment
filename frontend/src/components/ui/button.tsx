import { IChildren } from "@/types/children.type";
import { cn } from "@/utils/cn";
import React, { ButtonHTMLAttributes } from "react";
import { IClassName } from "../../types/className.type";
type ButtonProps = IChildren &
  ButtonHTMLAttributes<HTMLButtonElement> &
  IClassName;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center h-8 w-fit p-2 bg-white text-black font-medium border border-black rounded shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] transition cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
