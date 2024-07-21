import { useTranslations } from "next-intl";
import { Img } from "@/components/Img";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";
import React from "react";
import NumberTicker from "./magicui/number-ticker";

export default function HomeSection() {
  const t = useTranslations();
  return (
    <>
      {/* home section */}
      <div className="flex w-[96%] justify-center md:w-full">
        <div className="flex w-full items-center md:flex-row flex-col  xl:pl-20">
          <div className="flex flex-1 flex-col md:self-stretch md:w-1/2">
            <div className="flex flex-col gap-7 w-full">
              <Img
                src="img_close.svg"
                width={58}
                height={58}
                alt="Close Image"
                className="md:ml-[98px] h-[58px] w-[58px] ml-10 mt-4"
              />

              <Heading
                size="headinglg"
                as="h1"
                className="left-[8.00px] top-0 my-auto h-max w-[80%] leading-[55px]"
              >
                <>
                  {t("title1")}
                  <br />
                  <span className="bg-deep_purple-600 p-2">{t("title2")}</span>

                  <br />
                  {t("title3")}
                </>
              </Heading>
            </div>
            <Text
              as="p"
              className="ml-2 mt-6 w-full md:full text-sm leading-7 md:ml-0s"
            >
              {t("home-p")}
            </Text>
            <div className="ml-2 mt-6 flex items-start justify-between gap-5 md:ml-0">
              <a href="#pricing">
                <Button shape="round" className="min-w-[160px] font-semibold">
                  {t("start")}
                </Button>
              </a>
              <Img
                src="img_vector.svg"
                width={112}
                height={112}
                alt="Vector Image"
                className="mr-[35px] md:ml-48 mt-2 h-[110px] md:w-20 w-[60px] self-end"
              />
            </div>
          </div>
          <div className="relative h-[628px] w-full md:w-full flex justify-center">
            <div className="absolute bottom-0 md:left-auto md:right-auto w-[350px] xl:left-[50%] h-[550px] max-w-[350px] max-h-[550px] top-0 z-[2] my-auto rounded-[12px] bg-[url(/images/img_group_14.svg)] bg-cover bg-no-repeat py-1">
              <div className="relative w-full h-full flex flex-col justify-center items-center">
                <video
                  className="rounded-3xl rotate-3 w-[85%]"
                  muted
                  autoPlay
                  loop
                >
                  <source src="/video/video.mp4" />
                </video>
              </div>
              <p className="italic text-center text-white-a700 drop-shadow-md shadow-gray-200 mt-4">
                <NumberTicker
                  className="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg px-2 py-1"
                  value={700000}
                  direction="up"
                />
                <br />
                {t("yomi")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
