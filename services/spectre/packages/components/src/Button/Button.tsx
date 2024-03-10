import { Button as RACButton } from "react-aria-components";

import type { ButtonProps as RACButtonProps } from "react-aria-components";
import { tv } from "tailwind-variants";

type ButtonProps = RACButtonProps & {
  variant?: "primary" | "secondary" | "success" | "destructive";
};

const buttonStyles = tv({
  base: "px-4 py-2 text-white rounded-full",
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary text-primary",
      success: "bg-success",
      destructive: "bg-destructive",
    },
  },
});

export function Button(props: ButtonProps) {
  const { variant = "primary" } = props;
  return <RACButton className={buttonStyles({ variant })} {...props} />;
}

export type { ButtonProps } from "react-aria-components";
