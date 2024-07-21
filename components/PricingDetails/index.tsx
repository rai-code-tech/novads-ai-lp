"use client";

import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";
import React from "react";
import { useTranslations } from "next-intl";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { sendGTMEvent } from "@next/third-parties/google";
import { trackEvent } from "@openpanel/nextjs";
import { BorderBeam } from "@/components/magicui/border-beam";

interface Props {
  className?: string;
  link: string;
  price: string;
  options: { [key: string]: boolean };
  plan: string;
  ideal: string;
  currency?: string;
}

export default function PricingDetails({
  className,
  link,
  price,
  options,
  plan,
  ideal,
  currency,
  ...props
}: Props) {
  const t = useTranslations();

  const trackPurchase = (value: string, currency: string | undefined) => {
    sendGTMEvent({ event: "purchase", value, currency });
    trackEvent("purchase", { price, currency });
  };
  return (
    <div
      {...props}
      className={`${className} flex flex-col items-center w-full gap-9 bg-gradient rounded-[32px] relative`}
      id="pricing"
    >
      <BorderBeam duration={7} size={490} />
      <div className="mx-7 h-[4px] w-[79%] bg-gradient1 blur-[4.00px] backdrop-opacity-[0.5]" />
      <div className="flex w-[78%] flex-col gap-[22px]">
        <div className="flex flex-col items-start gap-6">
          <div className="flex  flex-col items-center rounded-[20px] bg-deep_purple-600 p-2.5">
            <div className="h-[20px] w-[20px] rounded-[10px] bg-gray-100" />
          </div>
          <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
            <Heading size="textmd" as="p">
              {plan}
            </Heading>
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {ideal}
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <Heading size="headingxl" as="h1" className="tracking-[-0.96px]">
            {price}
            {currency}
          </Heading>
        </div>
        <a onClick={() => trackPurchase(price, currency)} href={link}>
          <button className="self-stretch !rounded-[28px] bg-deep_purple-a200 text-white-a700 p-4 font-semibold">
            {t("book_your_ticket")}
          </button>
        </a>
      </div>
      <div className="h-px w-[78%] bg-white-a700_28" />
      <div className="mb-16 flex w-[78%] flex-col items-start justify-center gap-[18px]">
        <Text as="p" className="!font-medium tracking-[-0.36px]">
          {t("what_you_will_get")}
        </Text>
        <div className="flex flex-col gap-4 self-stretch">
          {Object.keys(options).map((optionKey) => (
            <div key={optionKey} className="flex items-center gap-2">
              {options[optionKey] ? (
                <>
                  <CheckIcon className="h-[16px] w-[16px] text-white-a700" />
                  <Text size="textxs" as="p" className="!text-white-a700_cc">
                    {t(optionKey)}
                  </Text>
                </>
              ) : (
                <>
                  <XMarkIcon className="h-[16px] w-[16px] text-slate-500" />
                  <Text size="textxs" as="p" className=" text-slate-500">
                    {t(optionKey)}
                  </Text>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
