import { Text, Img, Button, Heading } from "./..";
import React from "react";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  link: string;
}

export default function PricingDetails({ className, link, ...props }: Props) {
  const t = useTranslations();

  return (
    <div
      {...props}
      className={`${className} flex flex-col items-center w-full gap-9 bg-gradient rounded-[32px]`}
    >
      <div className="mx-7 h-[4px] w-[74%] bg-gradient1 blur-[4.00px] backdrop-opacity-[0.5]" />
      <div className="flex w-[78%] flex-col gap-[22px]">
        <div className="flex flex-col items-start gap-6">
          <div className="flex w-[14%] flex-col items-center rounded-[20px] bg-deep_purple-600 p-2.5">
            <div className="h-[20px] w-[20px] rounded-[10px] bg-gray-100" />
          </div>
          <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
            <Heading size="textmd" as="p">
              {t("basic")}
            </Heading>
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {t("ideal_for_those")}
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <Heading size="headingxl" as="h1" className="tracking-[-0.96px]">
            {t("price")}
          </Heading>
          <Text
            size="textxs"
            as="p"
            className="mb-2 self-end !text-white-a700_cc"
          >
            {t("price_period")}
          </Text>
        </div>
        <a href={link} className="">
          <Button
            shape="round"
            className="self-stretch !rounded-[28px] font-semibold"
          >
            {t("book_your_ticket")}
          </Button>
        </a>
      </div>
      <div className="h-px w-[78%] bg-white-a700_28" />
      <div className="mb-16 flex w-[78%] flex-col items-start justify-center gap-[18px]">
        <Text as="p" className="!font-medium tracking-[-0.36px]">
          {t("what_you_will_get")}
        </Text>
        <div className="flex flex-col gap-4 self-stretch">
          <div className="flex gap-2">
            <Img
              src="img_checkmark_white_a700.svg"
              width={16}
              height={16}
              alt="Credits Icon"
              className="h-[16px] w-[16px]"
            />
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {t("credits_per_month")}
            </Text>
          </div>
          <div className="flex gap-2">
            <Img
              src="img_checkmark_white_a700.svg"
              width={16}
              height={16}
              alt="Text Gen Icon"
              className="h-[16px] w-[16px]"
            />
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {t("text_generation")}
            </Text>
          </div>
          <div className="flex gap-2">
            <Img
              src="img_checkmark_white_a700.svg"
              width={16}
              height={16}
              alt="Ads Icon"
              className="h-[16px] w-[16px]"
            />
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {t("ads_platform_integration")}
            </Text>
          </div>
          <div className="flex gap-2">
            <Img
              src="img_checkmark_white_a700.svg"
              width={16}
              height={16}
              alt="Support Icon"
              className="h-[16px] w-[16px]"
            />
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {t("support")}
            </Text>
          </div>
          <div className="flex gap-2">
            <Img
              src="img_checkmark_white_a700.svg"
              width={16}
              height={16}
              alt="Tutorials Icon"
              className="h-[16px] w-[16px]"
            />
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {t("exclusive_tutorials")}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
