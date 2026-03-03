"use client"

import { Container, Main, Page } from "@/common/components/layout"
import Header from "@/common/components/layout/header/header.component"
import { Title } from "@/common/components/typography";
import { Carousel } from "@/common/components/ui"
import Image from "next/image";
import { useEffect } from "react";

export default function Bread() {

  const slides = [
    "https://www.youtube.com/embed/k8R25T6LAMQ?si=LrUhs9InGtCFIvpS",
    "https://www.youtube.com/embed/dF2XJD0dJSk?si=00CxDQOvN325FLXL",
    "https://www.youtube.com/embed/XDyUVrgiqis?si=1gpSZPPLGsE0_8nQ",
    "https://www.youtube.com/embed/62txhuiOvgM?si=WIHWzxBBcVyDdEcL",
    "https://www.youtube.com/embed/1wErAeUsUVU?si=NxbvNxTlMntwVmPe",
    "/images/bread/wheat-field.jpg"
  ];

  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.backgroundImage = "url('/images/bread/main.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    // document.body.style.backdropFilter = "blur(5px)"

    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return (
    <Page name="bread">
      <Header />
      <Main>
        <Container>
          <Title heading={1} align="center" className="font-adamathuz">Հաց</Title>
          <Carousel className="w-full h-125 md:h-150" breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}>
            {slides.map((slide, index) => {
              return (
                <Carousel.Slide key={index} className="h-full w-full">
                  <div className="w-full h-full rounded-md overflow-hidden">
                    {slide.startsWith("/") ? (
                      <img
                        src={slide}
                        alt="Wheat Field"
                        className="object-cover object-center w-full h-full"
                      />
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src={slide}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>
                </Carousel.Slide>
              )
            })}
          </Carousel>
        </Container>
      </Main>
    </Page>
  )
}
