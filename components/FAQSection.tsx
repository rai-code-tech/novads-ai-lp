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
      <div className="my-14 flex flex-col items-center self-stretch">
        <div className="text-center  gap-1">
          <h2 className="text-3xl font-bold text-white-a700 py-4">
            {t("faq_heading")}
          </h2>
          <p className="mt-3 px-2 text-white-a700 text-center">
            {t("faq_description")}
          </p>
        </div>
        <Accordion preExpanded={[0]} className="flex w-[90%] flex-col gap-5">
          {[...Array(1)].map((_, i) => (
            <AccordionItem uuid={i} key={`FAQ List${i}`}>
              <div className=" my-6 flex flex-1 flex-col gap-4 md:mx-0">
                <AccordionItemHeading className="w-full">
                  <AccordionItemButton>
                    <AccordionItemState>
                      {(props) => (
                        <>
                          <div className="flex  flex-row flex-nowrap rounded-3xl items-center w-full ring-1 ring-white-a700 p-10 justify-between gap-5">
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
                                className="h-[28px] w-[28px]"
                              />
                            ) : (
                              <Img
                                src="img_close_white_a700.svg"
                                width={20}
                                height={20}
                                alt="Quality Icon"
                                className="h-[20px] w-[20px]"
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
    </>
  );
}
