"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Img } from "./Img";
import Autoplay from "embla-carousel-autoplay";

interface Props {}

function CustomCarousel({}: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem className="scroll-pl-16 md:basis-1/2 lg:basis-1/3">
            <Img
              src={`examples/example${index + 1}.png`}
              className="rounded-xl drop-shadow-md shadow-white-a700 w-full"
              width={200}
              height={200}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CustomCarousel;
