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
        <div className="relative my-[140px] md:h-auto">
          {/* settings section */}
          <SettingsSection />
        </div>
      </div>
    </div>
  );
}
