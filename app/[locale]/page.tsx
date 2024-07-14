import { Button, Img, Text, Input } from "@/components";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import FAQSection1 from "@/components/FAQSection1";
import FooterSection from "@/components/FooterSection";
import HomePresaleSection from "@/components/HomePresaleSection";
import HomeSection from "@/components/HomeSection";
import HomeSection1 from "@/components/HomeSection1";
import HomeSection2 from "@/components/HomeSection2";
import SettingsSection from "@/components/SettingsSection";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return (
    <div className="w-full bg-black-900">
      <div className="flex flex-col items-center">
        <div className="relative h-[880px] self-stretch md:h-auto">
          <Img
            src="img_group_8.png"
            width={1440}
            height={730}
            alt="Image"
            className="h-[730px] w-full flex-1 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
            <div className="h-[808px] bg-[url(/images/img_group_13.png)] bg-cover bg-no-repeat p-7 md:h-auto sm:p-5">
              <div className="mb-7 flex flex-col items-center gap-3">
                <div className="container-xs md:p-5">
                  <Header />
                </div>

                {/* home section */}
                <HomeSection />
              </div>
            </div>
            <Img
              src="img_rectangle_7.png"
              width={1440}
              height={92}
              alt="Image"
              className="relative z-[3] mt-[-22px] h-[92px] w-full object-cover md:h-auto"
            />
          </div>
        </div>

        {/* home section */}
        <HomeSection1 />
        <div className="relative mt-[140px] h-[1894px] self-stretch md:h-auto">
          <div className="absolute bottom-[-1.00px] left-0 right-0 m-auto flex-1">
            <Img
              src="img_mask_group.svg"
              width={1440}
              height={914}
              alt="Image"
              className="h-[914px] w-full md:h-auto"
            />
            <Img
              src="img_rectangle_27.png"
              width={1440}
              height={80}
              alt="Image"
              className="relative mt-[-48px] h-[80px] w-full object-cover md:h-auto"
            />
          </div>
          <div className="flex flex-1 flex-col items-center">
            <div className="self-stretch">
              {/* settings section */}
              <SettingsSection />
              <Img
                src="img_group_24.png"
                width={1440}
                height={1120}
                alt="Image"
                className="relative z-[9] mt-[-390px] h-[1120px] w-full object-cover md:h-auto"
              />
            </div>
            <div className="container-xs relative z-10 mt-[-30px] flex flex-col items-start pl-[420px] pr-14 md:p-5 md:px-5">
              <Img
                src="img_vector_150x150.png"
                width={150}
                height={150}
                alt="Vector Image"
                className="h-[150px] w-[150px] object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-[8%] left-0 right-0 z-[11] m-auto flex flex-1 flex-col items-end">
            <Img
              src="img_vector_white_a700.svg"
              width={128}
              height={130}
              alt="Vector Image"
              className="relative z-[12] mr-12 h-[130px] w-[8%] md:mr-0"
            />

            {/* home presale section */}
            <HomePresaleSection />
          </div>
        </div>

        {/* home section */}
        <HomeSection2 />

        {/* f a q section */}
        <FAQSection />

        {/* f a q section */}
        <FAQSection1 />
        <div className="container-xs mt-7 flex flex-col items-center px-14 md:p-5 md:px-5">
          <Img
            src="img_f8uwsendbchvoqyoltxiauzog9a.png"
            width={200}
            height={44}
            alt="Featured Image"
            className="h-[44px] w-[18%] object-cover"
          />
          <Text as="p" className="mt-3 w-[24%] text-center leading-7 md:w-full">
            <>{t("discover_pricing")}</>
          </Text>
          <div className="relative mt-3 h-[70px] w-[34%] content-center md:h-auto">
            <Input
              shape="round"
              name="Email Field"
              placeholder={t("subscribe")}
              className="mx-auto"
            />
            <Button
              shape="round"
              className="absolute bottom-0 right-[10.00px] top-0 my-auto min-w-[126px] font-semibold"
            >
              {t("subscribe")}
            </Button>
          </div>
          <div className="mt-12 flex w-[44%] flex-wrap justify-between gap-5 md:w-full">
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <Text as="p">Lorem</Text>
            </Link>
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <Text as="p">Lorem</Text>
            </Link>
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <Text as="p">Lorem</Text>
            </Link>
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <Text as="p">Lorem</Text>
            </Link>
          </div>
        </div>
        <div className="relative mt-[58px] h-[88px] content-center self-stretch md:h-auto">
          {/* footer section */}
          <FooterSection />
          <Button
            size="md"
            variant="outline"
            shape="circle"
            className="absolute bottom-0 right-[7%] top-0 my-auto w-[56px] !rounded-[28px]"
          >
            <Img src="img_info.svg" width={28} height={28} />
          </Button>
        </div>
      </div>
    </div>
  );
}
