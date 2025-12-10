"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  Navigation,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  EffectCreative,
  EffectCards,
  EffectCube,
} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-cube"
import "swiper/css/effect-cards"
import "swiper/css/effect-creative"

import { Props, SwiperComponentProps } from "./types"

const defaultBreakpoints: SwiperComponentProps["breakpoints"] = {
  480: { slidesPerView: 1, spaceBetween: 0 },
  768: { slidesPerView: 2, spaceBetween: 12 },
  1024: { slidesPerView: 3, spaceBetween: 24 },
}

const Carousel: React.FC<Props> & { Slide: typeof SwiperSlide } = ({
  children,
  breakpoints = defaultBreakpoints,
  autoplay,
  effect = "cube",
  ...rest
}) => {
  const autoplayConfig = autoplay ?? {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }

  const creativeEffect = {
    prev: {
      shadow: false,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: false,
      translate: ["120%", 0, -500],
    },
  }

  return (
    <Swiper
      modules={[
        Navigation,
        Autoplay,
        EffectFade,
        EffectCoverflow,
        EffectCube,
        EffectCards,
        EffectCreative,
      ]}
      navigation
      loop
      autoplay={autoplayConfig}
      effect={effect}
      creativeEffect={effect === "creative" ? creativeEffect : undefined}
      coverflowEffect={
        effect === "coverflow"
          ? { rotate: 40, depth: 200, stretch: 0 }
          : undefined
      }
      breakpoints={breakpoints}
      {...rest}
    >
      {children}
    </Swiper>
  )
}

Carousel.Slide = SwiperSlide
export default Carousel
