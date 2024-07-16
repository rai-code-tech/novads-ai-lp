import { useTranslations } from "next-intl";
import PricingDetails from "./PricingDetails";
import React from "react";

export default function HomePresaleSection() {
  const t = useTranslations();

  const pricingOptionsBasic = {
    basic_credits_per_month: true,
    text_generation: true,
    ads_platform_integration: true,
    support: true,
    exclusive_tutorials: true,
    up_to_5_users: false,
    integrated_editor: false,
  };
  const pricingOptionsPro = {
    pro_credits_per_month: true,
    text_generation: true,
    ads_platform_integration: true,
    support: true,
    exclusive_tutorials: true,
    up_to_5_users: true,
    integrated_editor: true,
  };

  return (
    <>
      {/* home presale section */}
      <div className=" p-2 w-full">
        <div className="flex w-full items-start gap-7 flex-col md:flex-row ">
          <div className="flex w-full flex-col items-start md:w-1/3 md:space-y-8 md:mt-6 md:ml-6 ">
            <h1 className="p-4 text-white-a700 text-xl rounded-full bg-deep_purple-600 font-bold">
              {t("presale")}
            </h1>
            <h2 className="text-3xl font-bold text-white-a700 py-4">
              {t("lifetime_access")}
              <br />
              <span className="py-6">{t("tailored_plans")}</span>
            </h2>
            <p className="my-4 text-white-a700 text-left">
              {t("discover_novads")}
            </p>
          </div>
          <div className="flex flex-col w-full md:w-2/3 my-6 md:flex-row md:justify-evenly ">
            <PricingDetails
              plan="Basic"
              ideal={t("ideal_basic")}
              options={pricingOptionsBasic}
              price="49€"
              link="https://buy.stripe.com/28o0238YA88vd4A001"
              className="mb-6 md:mb-0 md:w-5/12"
            />
            <PricingDetails
              plan="Pro"
              ideal={t("ideal_pro")}
              options={pricingOptionsPro}
              price="149€"
              link="https://buy.stripe.com/00g8yz3EgcoL5C8144"
              className="md:w-5/12"
            />
          </div>
        </div>
      </div>
    </>
  );
}
