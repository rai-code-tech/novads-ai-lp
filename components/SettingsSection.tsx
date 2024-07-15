import { useTranslations } from "next-intl";
import { CheckBox, Text, Heading, Img } from ".";
import React from "react";

export default function SettingsSection() {
  const t = useTranslations();

  return (
    <>
      {/* settings section */}

      <div className="flex flex-col w-full">
        <h2 className="text-center text-2xl font-bold text-white-a700_cc mb-6">
          {t("imagine")},
          <span className="bg-deep_purple-900">{t("write-admire")}</span>
        </h2>

        <Text
          as="p"
          className="mr-2 self-stretch text-center leading-7 md:mr-0"
        >
          {t("promo")}
        </Text>
        <div className="my-10 w-4/5 m-auto">
          <div className="bg-[#323232] rounded-lg p-2 ring-1 ring-white-a700">
            <Img
              src="graph.png"
              width={1440}
              height={1120}
              alt="Image"
              className="rounded-lg top-3"
            />
            <div className="mr-3.5 flex flex-col items-start self-stretch md:mr-0">
              <h2 className="text-xl font-semibold uppercase text-center text-white-a700 py-4">
                {t("promo-title")}
              </h2>
              <Text as="p" className="my-3 text-justify text-sm">
                {t("opti-desc")}
              </Text>
              <ul className="mt-3 flex flex-col items-start gap-4 self-stretch">
                <span className="flex flex-row">
                  <CheckBox checked />
                  <li
                    id="CheckmarkItem"
                    className="pl-2 italic text-white-a700"
                  >
                    {t("opti-first")}
                  </li>
                </span>
                <span className="flex flex-row">
                  <CheckBox checked />
                  <li
                    className="pl-2 italic text-white-a700"
                    id="FineTuningCheckbox"
                  >
                    {t("opti-sec")}
                  </li>
                </span>
                <span className="flex flex-row">
                  <CheckBox checked />
                  <li
                    className="pl-2 italic text-white-a700"
                    id="CompetitorCheckbox"
                  >
                    {t("opti-ter")}
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <div className="bg-[#323232] my-10 rounded-lg p-2 ring-1 ring-white-a700">
            <Img
              src="promogirl.png"
              width={1440}
              height={1120}
              alt="Image"
              className="rounded-lg top-3 h-56 object-cover"
            />
            <div className="mr-3.5 flex flex-col items-start self-stretch md:mr-0">
              <h2 className="text-xl font-semibold uppercase text-center text-white-a700 py-4">
                {t("promo-title-sec")}
              </h2>
              <Text as="p" className="my-3 text-justify text-sm">
                {t("info-desc")}
              </Text>
              <ul className="mt-3 flex flex-col items-start gap-4 self-stretch">
                <span className="flex flex-row">
                  <CheckBox checked />
                  <li
                    id="CheckmarkItem"
                    className="pl-2 italic text-white-a700"
                  >
                    {t("info-first")}
                  </li>
                </span>
                <span className="flex flex-row">
                  <CheckBox checked />
                  <li
                    className="pl-2 italic text-white-a700"
                    id="FineTuningCheckbox"
                  >
                    {t("info-sec")}
                  </li>
                </span>
                <span className="flex flex-row">
                  <CheckBox checked />
                  <li
                    className="pl-2 italic text-white-a700"
                    id="CompetitorCheckbox"
                  >
                    {t("info-ter")}
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
