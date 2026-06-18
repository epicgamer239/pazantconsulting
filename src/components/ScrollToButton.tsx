"use client";

import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text" | "teal";

const variantMap: Record<
  ButtonVariant,
  VariantProps<typeof buttonVariants>["variant"]
> = {
  primary: "default",
  secondary: "outline",
  text: "link",
  teal: "teal",
};

interface ScrollToButtonProps {
  targetId: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function ScrollToButton({
  targetId,
  children,
  variant = "primary",
  className = "",
}: ScrollToButtonProps) {
  function handleClick() {
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const header = document.querySelector("header");
    const offset = (header?.getBoundingClientRect().height ?? 80) + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant: variantMap[variant], size: "lg" }),
        "h-12 px-7 text-sm font-semibold transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      {children}
    </button>
  );
}
