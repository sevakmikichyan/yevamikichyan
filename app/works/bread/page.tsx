// "use client"

// import { Container, Main, Page } from "@/common/components/layout"
// import Header from "@/common/components/layout/header/header.component"
// import { Title } from "@/common/components/typography";
// import { Carousel } from "@/common/components/ui"
// import { useEffect } from "react";

// export default function Bread() {

//   const slides = [
//     "https://www.youtube.com/embed/k8R25T6LAMQ?si=LrUhs9InGtCFIvpS",
//     "https://www.youtube.com/embed/dF2XJD0dJSk?si=00CxDQOvN325FLXL",
//     "https://www.youtube.com/embed/XDyUVrgiqis?si=1gpSZPPLGsE0_8nQ",
//     "/images/bread/wheat-field.jpg",
//     "https://www.youtube.com/embed/62txhuiOvgM?si=WIHWzxBBcVyDdEcL",
//     "https://www.youtube.com/embed/1wErAeUsUVU?si=NxbvNxTlMntwVmPe&start=425",
//     "/images/bread/forest.jpg",
//   ];

//   useEffect(() => {
//     const originalBackground = document.body.style.background;
//     document.body.style.backgroundImage = "url('/images/bread/main.jpg')";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundRepeat = "no-repeat";
//     document.body.style.backgroundPosition = "center";

//     return () => {
//       document.body.style.background = originalBackground;
//     };
//   }, []);

//   return (
//     <Page name="bread">
//       <Header />
//       <Main>
//         <Container>
//           <Title heading={1} align="center" className="font-adamathuz">Հաց</Title>
//           <Carousel className="w-full h-125 md:h-150" breakpoints={{
//             480: {
//               slidesPerView: 1,
//               spaceBetween: 0,
//             },
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 0,
//             },
//             1024: {
//               slidesPerView: 1,
//               spaceBetween: 0,
//             },
//           }}>
//             {slides.map((slide, index) => {
//               return (
//                 <Carousel.Slide key={index} className="h-full w-full">
//                   <div className="w-full h-full rounded-md overflow-hidden">
//                     {slide.startsWith("/images") && (
//                       <img
//                         src={slide}
//                         alt="Wheat Field"
//                         className="object-contain object-center w-full h-full"
//                       />
//                     )}  {slide.startsWith("https") && (
//                       <iframe
//                         className="w-full h-full"
//                         src={slide}
//                         title="YouTube video player"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       />
//                     )}
//                   </div>
//                 </Carousel.Slide>
//               )
//             })}
//           </Carousel>
//         </Container>
//       </Main>
//     </Page>
//   )
// }


"use client"

import { Container, Main, Page } from "@/common/components/layout"
import Header from "@/common/components/layout/header/header.component"
import { Title } from "@/common/components/typography";
import { Carousel } from "@/common/components/ui"
import classNames from "classnames";
import { video } from "framer-motion/client";
import { useEffect, useRef } from "react";

interface VideoSlide {
  type: "video";
  src: string;
}

interface IframeSlide {
  type: "iframe";
  src: string;
}

interface ImageSlide {
  type: "image";
  src: string;
  className?: string;
}

interface ImagesSlide {
  type: "images";
  images: string[];
  className?: string;
}

interface AudiosSlide {
  type: "audios";
  audios: string[];
}

export type Slide = VideoSlide | IframeSlide | ImageSlide | ImagesSlide | AudiosSlide;

export default function Bread() {

  const slides: Slide[] = [
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/k8R25T6LAMQ?si=LrUhs9InGtCFIvpS",
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/XDyUVrgiqis?si=1gpSZPPLGsE0_8nQ",
    },
    {
      type: "image",
      src: "/images/bread/wheat-field.jpg"
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/62txhuiOvgM?si=WIHWzxBBcVyDdEcL",
    },
    {
      type: "video",
      src: "/videos/bread/mult.mp4"
    },
    {
      type: "audios",
      audios: [
        "/audios/bread/1.m4a",
        "/audios/bread/2.m4a",
        "/audios/bread/3.m4a",
        "/audios/bread/4.m4a",
      ]
    },
    {
      type: "images",
      className: "object-contain",
      images: [
        "/images/bread/forest.jpg",
        "/images/bread/forest-2.jpg"
      ]
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/ZXZUYL7Mk0s?si=WQW9hjih2WM0FZFW",
    },
    {
      type: "image",
      src: "/images/bread/bread.jpg"
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/jauXEC9TLGg?si=PRlXkROzEFD0MWiC"
    }
  ];

  useEffect(() => {
    const handleSlideChange = () => {
      const audios = document.querySelectorAll<HTMLAudioElement>('audio');
      audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };

    const carouselEl = document.querySelector('.carousel-container');
    carouselEl?.addEventListener('slideChange', handleSlideChange);

    return () => carouselEl?.removeEventListener('slideChange', handleSlideChange);
  }, []);

  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.backgroundImage = "url('/images/bread/main.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

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
            {slides.map((slide, index) => (
              <Carousel.Slide key={index} className="h-full w-full">
                <div className="w-full h-full rounded-md overflow-hidden">

                  {slide.type === "iframe" && (
                    <iframe
                      className="w-full h-full"
                      src={slide.src}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}

                  {slide.type === "video" && (
                    <video
                      className="w-full h-full object-cover"
                      src={slide.src}
                      controls
                      playsInline
                    />
                  )}

                  {slide.type === "images" && (
                    <div
                      className={classNames(
                        "grid w-full h-full gap-2",
                        slide?.images?.length === 1 && "grid-cols-1",
                        slide?.images?.length === 2 && "grid-cols-2",
                        slide?.images?.length === 3 && "grid-cols-3",
                        slide?.images?.length >= 4 && "grid-cols-2 grid-rows-2"
                      )}
                    >
                      {slide?.images?.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className={classNames(
                            "object-cover object-center w-full h-full",
                            slide.className
                          )}
                        />
                      ))}
                    </div>
                  )}

                  {slide.type === "image" && (
                    <img
                      src={slide.src}
                      className={classNames("object-cover object-center w-full h-full", slide.className)}
                    />
                  )}

                  {slide.type === "audios" && (
                    <div
                      className="w-full h-full flex flex-col items-start justify-start gap-6 p-4 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/bread/audio-bg.jpg')" }}
                    >
                      {slide?.audios?.map((audio, i) => {
                        const audioRef = useRef<HTMLAudioElement>(null);

                        useEffect(() => {
                          const handlePlay = () => {
                            const audios = document.querySelectorAll<HTMLAudioElement>('audio');
                            audios.forEach(a => {
                              if (a !== audioRef.current) {
                                a.pause();
                                a.currentTime = 0;
                              }
                            });
                          };

                          const current = audioRef.current;
                          current?.addEventListener('play', handlePlay);
                          return () => current?.removeEventListener('play', handlePlay);
                        }, []);

                        return (
                          <div key={i} className="w-full flex flex-col items-start gap-2 px-24">
                            <audio ref={audioRef} controls className="w-full md:mt-md mt-sm" src={audio}></audio>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              </Carousel.Slide>
            ))}

          </Carousel>
        </Container>
      </Main>
    </Page>
  )
}
