import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const showArrow = variant === "primary" || variant === "teal";

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: variantMap[variant], size: "lg" }),
        "h-12 px-7 text-sm font-semibold transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="transition-transform duration-200 group-hover/button:translate-x-1" />
      )}
    </Link>
  );
}
