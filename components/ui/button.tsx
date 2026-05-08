import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-[#9fc6c7] text-[#0B1220] shadow-sm hover:-translate-y-0.5 hover:bg-[#b9d8d9] hover:shadow-md",
  secondary:
    "border border-white/10 bg-white/8 text-slate-100 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-[#7A9E9F] hover:bg-white/12 hover:shadow-md",
};

export const Button = ({ variant = "default", className, ...props }: ButtonProps) => {
  return <button className={cn(baseStyles, variantStyles[variant], className)} {...props} />;
};
