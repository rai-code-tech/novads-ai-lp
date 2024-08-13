import { Img } from "@/components/Img";
import React from "react";

export default function HomeSection1() {
  return (
    <>
      {/* home section */}
      <div className="mt-[37rem]  md:mt-[10rem] md:mb-36 mb-20 ">
        <div className=" flex justify-center md:p-5">
          <Img
            src="img_home.png"
            width={1240}
            height={882}
            alt="Home Image"
            className="w-[80%]  "
          />
        </div>
      </div>
    </>
  );
}
