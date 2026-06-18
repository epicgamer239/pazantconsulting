import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function AnimateIn({
  children,
  className,
  as: Tag = "div",
}: AnimateInProps) {
  return <Tag className={cn("reveal-in", className)}>{children}</Tag>;
}
