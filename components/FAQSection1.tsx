import { Button, Text, Heading, Img } from ".";
import React from "react";

export default function FAQSection1() {
  return (
    <>
      {/* f a q section */}
      <div className="relative mt-[168px] h-[356px] content-center self-stretch md:h-auto">
        <div className="container-xs flex justify-center md:p-5">
          <Img
            src="img_rectangle_28.png"
            width={1240}
            height={356}
            alt="Featured Image"
            className="h-[356px] w-full rounded-[40px] object-cover md:h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[86%] flex-col items-center px-14 md:px-5">
          <Heading size="heading2xl" as="h2">
            Frequently Asked Questions
          </Heading>
          <Text as="p" className="mt-2 w-[62%] text-center leading-7 md:w-full">
            Your Questions, Answered. Explore our comprehensive FAQ section to
            gain insights into the functionality, customization, and support.
          </Text>
          <Button
            color="white_A700"
            shape="round"
            className="mt-5 min-w-[160px] font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
