import React from "react";

const sizes = {
  textmd: "text-[24px] font-medium md:text-[22px]",
  headingxs: "text-[9px] font-bold",
  headings: "text-[11px] font-bold",
  headingmd: "text-[24px] font-bold md:text-[22px]",
  headinglg: "text-[30px] font-bold md:text-[28px] sm:text-[26px]",
  headingxl: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
  heading2xl: "text-[65px] font-bold md:text-[48px]",
  heading3xl: "text-[75px] font-bold md:text-[48px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headings",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-a700 font-antonio ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
