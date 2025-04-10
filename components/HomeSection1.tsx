import { Img } from "@/components/Img";
import React from "react";

export default function HomeSection1() {
  return (
    <>
      {/* home section */}
      <div className="mt-[500px] md:my-36 mb-20 flex justify-center self-stretch">
        <div className=" flex justify-center md:p-5">
          <Img
            src="img_home.png"
            width={1240}
            height={882}
            alt="Home Image"
            className="w-[80%] object-cover md:h-auto"
          />
        </div>
      </div>
    </>
  );
}
