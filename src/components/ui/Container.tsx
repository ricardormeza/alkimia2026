import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({ className, ...props }: ContainerProps) {
  const classes = [
    "mx-auto",
    "w-full",
    "max-w-[1200px]",
    "px-4",
    "sm:px-6",
    "lg:px-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}
