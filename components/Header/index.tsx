import { Button, Text, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-start gap-5 px-3.5 py-3 deep_purple_A200_deep_purple_A200_border bg-white-a700_0c rounded-[40px]`}
    >
      <Img
        src="img_header_logo.png"
        width={158}
        height={34}
        alt="Header Logo"
        className="ml-3.5 mt-2 h-[34px] w-[158px] object-contain"
      />
      <ul className="!mt-3 flex justify-center gap-[84px]">
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
        <li>
          <Link href="#">
            <Text as="p">Lorem</Text>
          </Link>
        </li>
      </ul>
      <Button shape="round" className="min-w-[160px] self-center font-semibold">
        Get Started
      </Button>
    </header>
  );
}
