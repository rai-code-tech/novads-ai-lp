"use client";
import React from "react";

const shapes = {
  round: "rounded-[34px]",
} as const;

const variants = {
  outline: {
    blue_gray_100: "border-blue_gray-100 border border-solid text-white-a700_7f",
  },
} as const;

const sizes = {
  xs: "h-[70px] px-[34px] text-[18px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "blue_gray_100",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text text-white-a700_7f text-[18px] border-blue_gray-100 border border-solid flex-grow rounded-[34px]  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };
