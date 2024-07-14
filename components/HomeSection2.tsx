import { Text, Heading, Button } from ".";
import UserProfile from "./UserProfile";
import React, { Suspense } from "react";

const featureGrid = [
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "Consistency and Quality",
    descriptionText:
      "Maintain a consistent brand image across all your advertising materials. Our Al ensures that every generated ad aligns perfectly with your brand&#39;s identity and standards.",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "Consistency and Quality",
    descriptionText:
      "Maintain a consistent brand image across all your advertising materials. Our Al ensures that every generated ad aligns perfectly with your brand&#39;s identity and standards.",
  },
  {
    userImage: "img_mask_group_1.png",
    headingText: "Cost-Effective",
    descriptionText:
      "Reduce your reliance on expensive design agencies. Novads.Al provides a budget-friendly solution for high-quality ad generation, maximizing your return on investment.",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "Consistency and Quality",
    descriptionText:
      "Maintain a consistent brand image across all your advertising materials. Our Al ensures that every generated ad aligns perfectly with your brand&#39;s identity and standards.",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "Consistency and Quality",
    descriptionText:
      "Maintain a consistent brand image across all your advertising materials. Our Al ensures that every generated ad aligns perfectly with your brand&#39;s identity and standards.",
  },
  {
    userImage: "img_mask_group_64x64.png",
    headingText: "Tailor-Made Ads",
    descriptionText:
      "Experience personalized advertising. Novads.Al analyzes your brand and preferences to create custom ads that resonate with your target audience, enhancing engagement and effectivenece",
  },
];

export default function HomeSection2() {
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
              Empowering Your Workflow
            </Button>
            <Heading
              size="heading2xl"
              as="h2"
              className="mt-[22px] bg-gradient2 bg-clip-text !text-transparent"
            >
              Unleashing The Full Potential
            </Heading>
            <Text as="p" className="mt-3">
              Discover a Seamless Experience with Mint - Boosting Productivity,
              Efficiency, and Collaboration in Every Click.
            </Text>
          </div>
          <div className="grid grid-cols-3 justify-center gap-5 md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {featureGrid.map((d, index) => (
                <UserProfile
                  {...d}
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
