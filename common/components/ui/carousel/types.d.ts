import { Swiper } from "swiper/react";

export type SwiperComponentProps = React.ComponentProps<typeof Swiper>

export type CarouselProps = {
  children: React.ReactNode
  breakpoints?: SwiperComponentProps["breakpoints"]
}

type Props = CarouselProps & Omit<SwiperComponentProps, "breakpoints">;