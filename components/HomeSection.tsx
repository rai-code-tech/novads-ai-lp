import { useTranslations } from "next-intl";
import { Img, Button, Text, Heading } from ".";
import React from "react";

export default function HomeSection() {
  const t = useTranslations();
  return (
    <>
      {/* home section */}
      <div className="flex w-[96%] justify-center md:w-full">
        <div className="flex w-full items-center md:flex-col">
          <div className="flex flex-1 flex-col md:self-stretch">
            <div className="flex flex-col gap-7">
              <Img
                src="img_close.svg"
                width={58}
                height={58}
                alt="Close Image"
                className="ml-[98px] h-[58px] w-[58px] md:ml-0"
              />
              <div className="relative h-[270px]">
                <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[92px] w-[60%] bg-deep_purple-600" />
                <Heading
                  size="heading3xl"
                  as="h1"
                  className="absolute bottom-0 left-[8.00px] top-0 my-auto h-max w-[80%] leading-[90px]"
                >
                  <>
                    {t("title1")}
                    <br />
                    {t("title2")}
                    <br />
                    {t("title3")}
                  </>
                </Heading>
              </div>
            </div>
            <Text as="p" className="ml-2 w-[86%] leading-7 md:ml-0 md:w-full">
              {t("home-p")}
            </Text>
            <div className="ml-2 mt-6 flex items-start justify-between gap-5 md:ml-0">
              <Button shape="round" className="min-w-[160px] font-semibold">
                {t("start")}
              </Button>
              <Img
                src="img_vector.svg"
                width={112}
                height={112}
                alt="Vector Image"
                className="mr-[58px] mt-2 h-[112px] w-[112px] self-end"
              />
            </div>
          </div>
          <div className="relative h-[628px] w-[48%] md:w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-center sm:relative sm:flex-col">
              <Img
                src="img_group_41.svg"
                width={354}
                height={620}
                alt="First Image"
                className="relative z-[1] h-[620px] w-[52%] sm:w-full"
              />
              <Img
                src="img_group_7.svg"
                width={254}
                height={150}
                alt="Second Image"
                className="relative ml-[-40px] h-[150px] w-[38%] self-end sm:ml-0 sm:w-full sm:self-auto"
              />
            </div>
            <div className="absolute bottom-0 left-[11%] top-0 z-[2] my-auto h-[602px] w-[56%] rounded-[12px] bg-[url(/images/img_group_14.svg)] bg-cover bg-no-repeat py-1 md:h-auto">
              <Img
                src="img_screenshot_355_cleanup.png"
                width={354}
                height={588}
                alt="Screenshot Image"
                className="mr-2 h-[588px] w-full rounded-[12px] object-cover md:mr-0 md:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
