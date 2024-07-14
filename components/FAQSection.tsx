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
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations();

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
              {t("faq_heading")}
            </Heading>
            <Text as="p" className="self-stretch text-center leading-7">
              {t("faq_description")}
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
                                {t("faq_question_1")}
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
                        {t("faq_answer_1")}
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
