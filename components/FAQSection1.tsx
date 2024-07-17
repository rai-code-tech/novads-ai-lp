import { Button, Text, Heading, Img } from ".";
import React from "react";
import { useTranslations } from "next-intl";

export default function FAQSection1() {
  const t = useTranslations();

  return (
    <>
      {/* f a q section */}
      <div className="bg-gradient-to-b from-[#5b1cc7] w-[90%] rounded-3xl p-4 m-4 to-[#9253fd] mx-auto self-stretch md:h-auto">
        <div className="flex flex-col text-center space-y-6 py-5">
          <h2 className="text-3xl bg-gradient2  bg-clip-text  !text-transparent">
            {t("faq_heading1")}
          </h2>
          <p className="mt-3 text-white-a700 text-center">
            {t("faq_description1")}
          </p>
         <a href="#pricing"><Button
            color="white_A700"
            shape="round"
            className="mt-5 min-w-[160px] font-semibold"
          >
            {t("start")}
          </Button></a>
        </div>
      </div>
    </>
  );
}
