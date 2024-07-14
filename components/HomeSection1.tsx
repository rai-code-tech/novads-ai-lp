import { Img } from ".";
import React from "react";

export default function HomeSection1() {
  return (
    <>
      {/* home section */}
      <div className="mt-2.5 flex justify-center self-stretch">
        <div className="container-xs flex justify-center md:p-5">
          <Img
            src="img_home.png"
            width={1240}
            height={882}
            alt="Home Image"
            className="h-[882px] w-full object-cover md:h-auto"
          />
        </div>
      </div>
    </>
  );
}
