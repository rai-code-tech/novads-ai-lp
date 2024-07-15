"use client";

import { useTranslations } from "next-intl";
import { Button, Text, Img } from "./..";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      {...props}
      className={`${props.className} flex flex-col md:flex-row justify-between items-center gap-5 px-3.5 py-3 ring-deep_purple-600 ring-1 bg-white-a700_0c rounded-3xl`}
    >
      <div className="flex justify-between w-full md:w-auto">
        <Img
          src="img_header_logo.png"
          width={158}
          height={34}
          alt="Header Logo"
          className="ml-3.5 mt-2 h-[34px] w-[158px] object-contain"
        />
        <button
          className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <ul className="hidden md:flex justify-center gap-[84px] mt-3 md:mt-0 md:ml-6 md:bg-black md:text-white md:rounded-full md:px-6">
        <li>
          <Link href="#">
            <Text as="p">Lorem</Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text as="p">Lorem</Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text as="p">Lorem</Text>
          </Link>
        </li>
      </ul>

      <Button
        shape="round"
        className="hidden md:block min-w-[160px] self-center font-semibold bg-purple-600 text-white hover:bg-purple-700"
      >
        {t("start")}
      </Button>

      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-4 mt-4 md:hidden bg-white shadow-lg rounded-lg p-4">
          <li>
            <Link href="#">
              <Text as="p">Lorem</Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p">Lorem</Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="p">Lorem</Text>
            </Link>
          </li>
          <Button
            shape="round"
            className="min-w-[160px] font-semibold bg-purple-600 text-white hover:bg-purple-700"
          >
            {t("start")}
          </Button>
        </ul>
      )}
    </header>
  );
}
