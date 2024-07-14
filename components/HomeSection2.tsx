import { useTranslations } from "next-intl";
import { Text, Heading, Button } from ".";
import UserProfile from "./UserProfile";
import React, { Suspense } from "react";

const featureGrid = [
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "consistency_quality",
    descriptionText: "consistency_quality_description",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "consistency_quality",
    descriptionText: "consistency_quality_description",
  },
  {
    userImage: "img_mask_group_1.png",
    headingText: "cost_effective",
    descriptionText: "cost_effective_description",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "consistency_quality",
    descriptionText: "consistency_quality_description",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "consistency_quality",
    descriptionText: "consistency_quality_description",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "tailor_made_ads",
    descriptionText: "tailor_made_ads_description",
  },
];
export default function HomeSection2() {
  const t = useTranslations();

  return (
    <>
      {/* home section */}
      <div className="mt-[108px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-11 md:p-5">
          <div className="mx-[204px] flex flex-col items-center md:mx-0">
            <Button
              size="xs"
              shape="square"
              className="min-w-[320px] font-bold"
            >
              {t("empowering_workflow")}
            </Button>
            <Heading
              size="heading2xl"
              as="h2"
              className="mt-[22px] bg-gradient2 bg-clip-text !text-transparent"
            >
              {t("unleashing_potential")}
            </Heading>
            <Text as="p" className="mt-3">
              {t("discover_seamless_experience")}
            </Text>
          </div>
          <div className="grid grid-cols-3 justify-center gap-5 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {featureGrid.map((d, index) => (
                <UserProfile
                  userImage={d.userImage}
                  headingText={t(d.headingText)}
                  descriptionText={t(d.descriptionText)}
                  key={"gridLayout" + index}
                  className="rounded-[30px] border border-solid border-blue_gray-100 sm:py-5"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
