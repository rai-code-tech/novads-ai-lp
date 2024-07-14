"use client";

import { Text, Img, Heading } from ".";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function FAQSection() {
  return (
    <>
      {/* f a q section */}
      <div className="mt-[136px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[30px] px-14 md:p-5 md:px-5">
          <div className="mx-[114px] flex w-[88%] flex-col items-center gap-1 md:mx-0 md:w-full">
            <Heading
              size="heading2xl"
              as="h2"
              className="bg-gradient2 bg-clip-text !text-transparent"
            >
              Frequently Asked Questions
            </Heading>
            <Text as="p" className="self-stretch text-center leading-7">
              Your Questions, Answered. Explore our comprehensive FAQ section to
              gain insights into the functionality, customization, and support.
            </Text>
          </div>
          <Accordion preExpanded={[0]} className="flex w-[90%] flex-col gap-14">
            {[...Array(4)].map((_, i) => (
              <AccordionItem uuid={i} key={`FAQ List${i}`}>
                <div className="ml-[46px] mr-[38px] mt-11 flex flex-1 flex-col gap-4 md:mx-0">
                  <AccordionItemHeading className="w-full">
                    <AccordionItemButton>
                      <AccordionItemState>
                        {(props) => (
                          <>
                            <div className="flex flex-wrap items-center justify-between gap-5 md:flex-col">
                              <Heading
                                size="headingmd"
                                as="h3"
                                className="bg-gradient2 bg-clip-text !text-transparent"
                              >
                                What is Novads.AI and how can it benefit my
                                business?
                              </Heading>
                              {props?.expanded ? (
                                <Img
                                  src="img_close_deep_purple_a200.svg"
                                  width={28}
                                  height={28}
                                  alt="Toggle Icon"
                                  className="h-[28px] w-[28px] md:w-full"
                                />
                              ) : (
                                <Img
                                  src="img_close_white_a700.svg"
                                  width={20}
                                  height={20}
                                  alt="Quality Icon"
                                  className="h-[20px] w-[20px] md:w-full"
                                />
                              )}
                            </div>
                          </>
                        )}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="flex justify-center">
                      <Text as="p" className="w-[92%] leading-7">
                        Novads.Al is an advanced Al-driven platform designed to
                        streamline and enhance the process of creating image ads
                        for your business. By leveraging cutting-edge artificial
                        intelligence, Novads.Al automatically generates
                        high-quality, visually appealing ads tailored to your
                        brand&#39;s unique identity and target audience.
                      </Text>
                    </div>
                  </AccordionItemPanel>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
