import React from "react";

export default function FooterSection() {
  return (
    <>
      <div className="mx-auto flex-1">
        <div className="flex justify-center bg-blue_gray-100_14 py-7 px-2 sm:py-5">
          <div className="container-xs mb-2 flex md:p-5">
            <p className=" text-white-a700 text-center">
              © {new Date().getFullYear()} Novads.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
