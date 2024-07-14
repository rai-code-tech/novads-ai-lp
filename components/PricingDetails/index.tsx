import { Text, Img, Button, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  basic?: React.ReactNode;
  idealforthose?: React.ReactNode;
  price?: React.ReactNode;
  pricePeriod?: React.ReactNode;
  bookButtonText?: string;
  whatYouWillGetText?: React.ReactNode;
  creditsPerMonthText?: React.ReactNode;
  textGenerationText?: React.ReactNode;
  adsPlatformIntegrationText?: React.ReactNode;
  supportText?: React.ReactNode;
  exclusiveTutorialsText?: React.ReactNode;
}

export default function PricingDetails({
  basic = "Basic",
  idealforthose = "Ideal for those with minor to moderate use",
  price = "$49",
  pricePeriod = "/ per month",
  bookButtonText = "Book Your Ticket",
  whatYouWillGetText = "What you will get",
  creditsPerMonthText = "25 credits/month",
  textGenerationText = "Text generation",
  adsPlatformIntegrationText = "Ads platform integration",
  supportText = "24/7 Email & Chat Support",
  exclusiveTutorialsText = "Exclusive tutorials",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[48%] gap-9 bg-gradient rounded-[32px]`}
    >
      <div className="mx-7 h-[4px] w-[74%] bg-gradient1 blur-[4.00px] backdrop-opacity-[0.5]" />
      <div className="flex w-[78%] flex-col gap-[22px]">
        <div className="flex flex-col items-start gap-6">
          <div className="flex w-[14%] flex-col items-center rounded-[20px] bg-deep_purple-600 p-2.5">
            <div className="h-[20px] w-[20px] rounded-[10px] bg-gray-100" />
          </div>
          <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
            <Heading size="textmd" as="p">
              {basic}
            </Heading>
            <Text size="textxs" as="p" className="!text-white-a700_cc">
              {idealforthose}
            </Text>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <Heading size="headingxl" as="h1" className="tracking-[-0.96px]">
            {price}
          </Heading>
          <Text size="textxs" as="p" className="mb-2 self-end !text-white-a700_cc">
            {pricePeriod}
          </Text>
        </div>
        <Button shape="round" className="self-stretch !rounded-[28px] font-semibold">
          {bookButtonText}
        </Button>
      </div>
      <div className="h-px w-[78%] bg-white-a700_28" />
      <div className="mb-16 flex w-[78%] flex-col items-start justify-center gap-[18px]">
        <Text as="p" className="!font-medium tracking-[-0.36px]">
          {whatYouWillGetText}
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
              {creditsPerMonthText}
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
              {textGenerationText}
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
              {adsPlatformIntegrationText}
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
              {supportText}
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
              {exclusiveTutorialsText}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
