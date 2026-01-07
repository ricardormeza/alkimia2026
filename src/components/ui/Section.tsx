import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement>;

export default function Section({ className, ...props }: SectionProps) {
  const classes = [
    "py-12",
    "md:py-16",
    "lg:py-24",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <section className={classes} {...props} />;
}
