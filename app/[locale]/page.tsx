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
    <div className="w-full h-auto bg-black-900">
      <div className="flex flex-col items-center">
        <div className="relative h-[880px] self-stretch md:h-auto">
          <Img
            src="img_group_8.png"
            width={1440}
            height={730}
            alt="Image"
            className="h-[730px] w-full flex-1 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto ">
            <div className="h-[808px] bg-[url(/images/img_group_13.png)] bg-cover bg-no-repeat p-7 sm:p-5">
              <div className=" md:p-5">
                <Header />
              </div>
              <div className="mb-7 flex flex-col items-center gap-3">
                {/* home section */}
                <HomeSection />
              </div>
            </div>
          </div>
        </div>
        <HomeSection1 />
        <div className="relative my-6 md:h-auto">
          {/* settings section */}
          <SettingsSection />
        </div>
        <div className=" bg-[url(/images/img_group_13.png)] bg-cover bg-no-repeat m-auto">
          {/* home presale section */}
          <HomePresaleSection />
        </div>
        <HomeSection2 />
        {/* f a q section */}
        <FAQSection />
        {/* f a q section */}
        <FAQSection1 />
        <div className="flex flex-col items-center my-10 space-y-6">
          <Img
            src="img_f8uwsendbchvoqyoltxiauzog9a.png"
            width={200}
            height={44}
            alt="Featured Image"
            className=""
          />
          <p className="mt-3 text-white-a700 text-center">
            <>{t("discover_pricing")}</>
          </p>
          <div className="relative mt-3 h-[70px] w-[90%] content-center md:h-auto">
            <Input
              shape="round"
              name="Email Field"
              placeholder={t("subscribe")}
              className="mx-auto"
            />
            <Button
              shape="round"
              className="absolute bottom-0 right-[10.00px] top-0 my-auto w-[120px] font-semibold"
            >
              {t("subscribe")}
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-evenly w-full">
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <p className="mt-3 text-white-a700 text-center">Lorem </p>
            </Link>
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <p className="mt-3 text-white-a700 text-center">Lorem </p>
            </Link>
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <p className="mt-3 text-white-a700 text-center">Lorem </p>
            </Link>
            <Link href="Lorem" target="_blank" rel="noreferrer">
              <p className="mt-3 text-white-a700 text-center">Lorem </p>
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
