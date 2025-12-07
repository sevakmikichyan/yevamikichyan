"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { Props, SwiperComponentProps } from "./types"

const defaultBreakpoints: SwiperComponentProps["breakpoints"] = {
  480: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
}

const Carousel: React.FC<Props> & { Slide: typeof SwiperSlide } = ({
  children,
  breakpoints = defaultBreakpoints,
  ...rest
}) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      breakpoints={breakpoints}
      {...rest}
    >
      {children}
    </Swiper>
  )
}

Carousel.Slide = SwiperSlide

export default Carousel;