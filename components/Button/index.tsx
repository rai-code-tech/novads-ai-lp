import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[26px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-a700 text-black-900",
    deep_purple_600: "bg-deep_purple-600 text-white-a700",
  },
  outline: {
    deep_purple_600: "border-deep_purple-600 border border-solid",
  },
} as const;
const sizes = {
  md: "h-[56px] px-3.5",
  xs: "h-[42px] px-4 text-[24px]",
  sm: "h-[54px] px-[34px] text-[18px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "deep_purple_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
