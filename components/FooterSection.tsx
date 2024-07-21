import React from "react";
import { useTranslations } from "next-intl";

export default function FooterSection() {
  const t = useTranslations();
  return (
    <>
      <div className="mx-auto flex-1">
        <div className="flex justify-center bg-blue_gray-100_14 py-7 px-2 sm:py-5">
          <div className="container-xs mb-2 flex md:p-5">
            <p className=" text-white-a700 text-center">
              © {new Date().getFullYear()} {t("allRightReserved")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
