import { useTranslations } from "next-intl";
import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { CheckIcon } from "@heroicons/react/24/outline";

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
        <div className="my-10 w-4/5 m-auto flex flex-col lg:flex-row lg:w-full lg:justify-evenly lg:items-center">
          <div className="bg-[#323232] lg:min-h-[575px] lg:w-1/3 rounded-lg p-4 ring-1 ring-white-a700 flex flex-col">
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
                <span className="flex flex-row item-center">
                  <CheckIcon
                    width={25}
                    strokeWidth={4}
                    color="white"
                    className="bg-deep_purple-a200 rounded-md p-1 ring-deep_purple-a400 ring-1"
                  />
                  <li
                    id="CheckmarkItem"
                    className="pl-2 italic text-white-a700"
                  >
                    {t("opti-first")}
                  </li>
                </span>
                <span className="flex flex-row item-center">
                  <CheckIcon
                    width={25}
                    strokeWidth={4}
                    color="white"
                    className="bg-deep_purple-a200 rounded-md p-1 ring-deep_purple-a400 ring-1"
                  />
                  <li
                    className="pl-2 italic text-white-a700"
                    id="FineTuningCheckbox"
                  >
                    {t("opti-sec")}
                  </li>
                </span>
                <span className="flex flex-row item-center">
                  <CheckIcon
                    width={25}
                    strokeWidth={4}
                    color="white"
                    className="bg-deep_purple-a200 rounded-md p-1 ring-deep_purple-a400 ring-1"
                  />
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
          <div className="bg-[#323232] lg:min-h-[575px] justify-evenly lg:w-1/3 my-10 rounded-lg p-4 ring-1 ring-white-a700 flex flex-col">
            <Img
              src="promogirl.png"
              width={1440}
              height={1120}
              alt="Image"
              className="rounded-lg top-3 h-72 object-cover "
            />
            <div className="mr-3.5 flex flex-col items-start self-stretch md:mr-0">
              <h2 className="text-xl font-semibold uppercase text-center text-white-a700 py-4">
                {t("promo-title-sec")}
              </h2>
              <Text as="p" className="my-3 text-justify text-sm">
                {t("info-desc")}
              </Text>
              <ul className="mt-3 flex flex-col items-start gap-4 self-stretch">
                <span className="flex flex-row item-center">
                  <CheckIcon
                    width={25}
                    strokeWidth={4}
                    color="white"
                    className="bg-deep_purple-a200 rounded-md p-1 ring-deep_purple-a400 ring-1"
                  />
                  <li
                    id="CheckmarkItem"
                    className="pl-2 italic text-white-a700"
                  >
                    {t("info-first")}
                  </li>
                </span>
                <span className="flex flex-row item-center">
                  <CheckIcon
                    width={25}
                    strokeWidth={4}
                    color="white"
                    className="bg-deep_purple-a200 rounded-md p-1 ring-deep_purple-a400 ring-1"
                  />
                  <li
                    className="pl-2 italic text-white-a700"
                    id="FineTuningCheckbox"
                  >
                    {t("info-sec")}
                  </li>
                </span>
                <span className="flex flex-row item-center">
                  <CheckIcon
                    width={25}
                    strokeWidth={4}
                    color="white"
                    className="bg-deep_purple-a200 rounded-md p-1 ring-deep_purple-a400 ring-1"
                  />
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
