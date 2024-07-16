import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Text, Heading, Button } from ".";
import UserProfile from "./UserProfile";

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
      <div className="my-10 flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-11 md:p-5">
          <div className="flex flex-col items-center md:mx-0">
            <h1 className="text-white-a700 text-xl bg-deep_purple-600 font-bold">
              {t("empowering_workflow")}
            </h1>
            <h2 className="text-3xl bg-gradient2 bg-clip-text my-4 !text-transparent">
              {t("unleashing_potential")}
            </h2>
            <p className="mt-3 text-white-a700 text-center">
              {t("discover_seamless_experience")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center mx-2">
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
