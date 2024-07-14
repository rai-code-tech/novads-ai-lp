import { useTranslations } from "next-intl";
import { Text, Heading, Button } from ".";
import PricingDetails from "./PricingDetails";
import React from "react";

export default function HomePresaleSection() {
  const t = useTranslations();

  return (
    <>
      {/* home presale section */}
      <div className="relative mt-[-78px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center md:p-5">
          <div className="flex w-full items-start gap-7 md:flex-col">
            <div className="flex w-[38%] flex-col items-start md:w-full">
              <Button
                size="xs"
                shape="square"
                className="min-w-[112px] font-bold"
              >
                {t("presale")}
              </Button>
              <Heading
                size="heading2xl"
                as="h1"
                className="mt-7 w-full bg-gradient2 bg-clip-text leading-[65px] !text-transparent"
              >
                <>
                  {t("lifetime_access")}
                  <br />
                  {t("tailored_plans")}
                </>
              </Heading>
              <Text as="p" className="mt-3.5">
                {t("discover_novads")}
              </Text>
            </div>
            <div className="ml-7 flex flex-1 gap-[18px] self-center md:ml-0 md:flex-col md:self-stretch">
              <PricingDetails className="deep_purple_900_51_deep_purple_900_28_border border border-solid md:w-full md:gap-9" />
              <PricingDetails className="p-[38px] md:w-full md:gap-9 sm:p-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
