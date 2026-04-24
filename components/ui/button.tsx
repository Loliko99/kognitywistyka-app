import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-blue-700 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200",
};

export const Button = ({ variant = "default", className, ...props }: ButtonProps) => {
  return <button className={cn(baseStyles, variantStyles[variant], className)} {...props} />;
};
