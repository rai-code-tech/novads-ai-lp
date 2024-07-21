import { Img } from "@/components/Img";
import { Text } from "@/components/Text";
import { Heading } from "@/components/Heading";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  headingText?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

export default function UserProfile({
  userImage = "img_mask_group_64x64.png",
  headingText = "Consistency and Quality",
  descriptionText = "Maintain a consistent brand image across all your advertising materials. Our Al ensures that every generated ad aligns perfectly with your brand&#39;s identity and standards.",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full px-5 py-8`}
    >
      <Img
        src={userImage}
        width={64}
        height={64}
        alt="Image"
        className="h-[64px] w-[64px] object-cover"
      />
      <Heading size="headingmd" as="h4" className="mt-[22px]">
        {headingText}
      </Heading>
      <Text as="p" className="mb-6 mt-2 self-stretch text-center leading-7">
        {descriptionText}
      </Text>
    </div>
  );
}
