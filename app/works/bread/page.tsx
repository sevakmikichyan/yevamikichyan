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
import { useEffect, useRef } from "react";

type ObjectFit = "contain" | "cover";

interface VideoSlide {
  type: "video";
  src: string;
  className?: string;
  objectFit?: ObjectFit;
  words?: string;
}

interface IframeSlide {
  type: "iframe";
  src: string;
  words?: string;
}

interface ImageSlide {
  type: "image";
  src: string;
  className?: string;
  objectFit?: ObjectFit;
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

export type Slide =
  | VideoSlide
  | IframeSlide
  | ImageSlide
  | ImagesSlide
  | AudiosSlide;

function hasWords(slide: Slide): slide is VideoSlide | IframeSlide {
  return (slide.type === "video" || slide.type === "iframe") && typeof slide.words === "string";
}

function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handlePlay = () => {
      const audios = document.querySelectorAll<HTMLAudioElement>("audio");
      audios.forEach(a => {
        if (a !== audioRef.current) {
          a.pause();
          a.currentTime = 0;
        }
      });
    };

    const current = audioRef.current;
    current?.addEventListener("play", handlePlay);

    return () => current?.removeEventListener("play", handlePlay);
  }, []);

  return (
    <audio
      ref={audioRef}
      controls
      className="w-full md:mt-md mt-sm"
      src={src}
    />
  );
}

export default function Bread() {

  const slides: Slide[] = [
    { type: "iframe", src: "https://www.youtube.com/embed/k8R25T6LAMQ?si=LrUhs9InGtCFIvpS" },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/XDyUVrgiqis?si=1gpSZPPLGsE0_8nQ",
      words: `
1. Կրակը թռավ քարից, Երի, երի, էվա, օ՜յ, օ՜յ, Ես կմեռնեմ քո դարդից, էվա, յարո ջան
2. Ծով ա դառել մեր դաշտը, Երի, երի, էվա, օ՜յ, օ՜յ, Լիքը հաց ա մեր տաշտը, էվա յարո ջան
3. Հաց կթխեմ, գարի ա, Երի, երի, էվա, օ՜յ, օ՜յ, Էս ինչ դժվար տարի ա, Շեկո ջան, էվա, օ՜յ, օ՜յ

1. Կրակը թռավ քարից, Երի, երի, էվա, օ՜յ, օ՜յ, Ես կմեռնեմ քո դարդից, էվա, յարո ջան
2. Ծով ա դառել մեր դաշտը, Երի, երի, էվա, օ՜յ, օ՜յ, Լիքը հաց ա մեր տաշտը, էվա յարո ջան
3. Հաց կթխեմ, գարի ա, Երի, երի, էվա, օ՜յ, օ՜յ, Էս ինչ դժվար տարի ա, Շեկո ջան, էվա, օ՜յ, օ՜յ

1. Կրակը թռավ քարից, Երի, երի, էվա, օ՜յ, օ՜յ, Ես կմեռնեմ քո դարդից, էվա, յարո ջան
2. Ծով ա դառել մեր դաշտը, Երի, երի, էվա, օ՜յ, օ՜յ, Լիքը հաց ա մեր տաշտը, էվա յարո ջան
3. Հաց կթխեմ, գարի ա, Երի, երի, էվա, օ՜յ, օ՜յ, Էս ինչ դժվար տարի ա, Շեկո ջան, էվա, օ՜յ, օ՜յ

1. Կրակը թռավ քարից, Երի, երի, էվա, օ՜յ, օ՜յ, Ես կմեռնեմ քո դարդից, էվա, յարո ջան
2. Ծով ա դառել մեր դաշտը, Երի, երի, էվա, օ՜յ, օ՜յ, Լիքը հաց ա մեր տաշտը, էվա յարո ջան
3. Հաց կթխեմ, գարի ա, Երի, երի, էվա, օ՜յ, օ՜յ, Էս ինչ դժվար տարի ա, Շեկո ջան, էվա, օ՜յ, օ՜յ

1. Կրակը թռավ քարից, Երի, երի, էվա, օ՜յ, օ՜յ, Ես կմեռնեմ քո դարդից, էվա, յարո ջան
2. Ծով ա դառել մեր դաշտը, Երի, երի, էվա, օ՜յ, օ՜յ, Լիքը հաց ա մեր տաշտը, էվա յարո ջան
3. Հաց կթխեմ, գարի ա, Երի, երի, էվա, օ՜յ, օ՜յ, Էս ինչ դժվար տարի ա, Շեկո ջան, էվա, օ՜յ, օ՜յ
`
    },
    { type: "image", src: "/images/bread/wheat-field.jpg" },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/62txhuiOvgM?si=WIHWzxBBcVyDdEcL",
      words: `
Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։
Կաքավ եմ քարի միջին, ցորեն եմ ցանե, ձեն կուտամ ձորի միջին, ցորեն եմ ցանե։
Հանդեն ծաղիկ քաղել եմ, ցորեն եմ ցանե, դաստա արել, կապել եմ, ցորեն եմ ցանե։
Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։
Կաքավ եմ սար ման կուգամ, ցորեն եմ ցանե, բլբուլ եմ բաղ ման կուգամ, ցորեն եմ ցանե։
Գնացել ու եկել եմ ցորեն եմ ցանե, չարոխ գուլպես կոկել եմ ցորեն եմ ցանել։
Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։
Խաղ կանչող իմ ախպերը ցորեն եմ ցանե, կպտտի արտերը ցորեն եմ ցանե։
Ախպեր ջան բաղովն արի, ցորեն եմ ցանե, ոտներդ շաղով արի ցորեն եմ ցանե
Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։

Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։
Կաքավ եմ քարի միջին, ցորեն եմ ցանե, ձեն կուտամ ձորի միջին, ցորեն եմ ցանե։
Հանդեն ծաղիկ քաղել եմ, ցորեն եմ ցանե, դաստա արել, կապել եմ, ցորեն եմ ցանե։
Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։
Կաքավ եմ սար ման կուգամ, ցորեն եմ ցանե, բլբուլ եմ բաղ ման կուգամ, ցորեն եմ ցանե։
Գնացել ու եկել եմ ցորեն եմ ցանե, չարոխ գուլպես կոկել եմ ցորեն եմ ցանել։
Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։
Խաղ կանչող իմ ախպերը ցորեն եմ ցանե, կպտտի արտերը ցորեն եմ ցանե։
Ախպեր ջան բաղովն արի, ցորեն եմ ցանե, ոտներդ շաղով արի ցորեն եմ ցանե
Ցորեն եմ ցանել արտը ծլե կանաչել, հեռու տեղ ախպերմ ունիմ,ականջը կանչե։

Գնանք տատիկին բերենք լավաշի ալյուր մաղենք
Տատիկս ալյուր կմաղե, վըր վթներին կշաղեր, վեշթո նրան կկողեր։
Տատիկ զալուր կըմաղեր, վըր փեշերուն կըշաղեր, վեշթո նրան կկողեր։
`
    },
    { type: "video", src: "/videos/bread/mult.mp4" },
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
      words: `
Գնանք տատիկին բերենք լավաշի ալյուր մաղենք Գնանք տատիկին բերենք լավաշի ալյուր մաղենք
Տատիկս ալյուր կմաղե, Տատիկս ալյուր կմաղե, Տատիկս ալյուր կմաղե վըր վթներին կշաղեր։ Վըր վթներին կըշաղեր, վեշթո նրան կկողեր։

Տատիկ զալուր կըմաղեր, Տատիկ զալուր կըմաղեր, Տատիկ զալուր կըմաղեր Վըր փեշերուն կըշաղեր: Վըր փեշերուն կըշաղեր, վեշթո նրան կկողեր։

Գնանք տատիկին բերենք լավաշի ալյուր մաղենք Գնանք տատիկին բերենք լավաշի ալյուր մաղենք
Տատիկս ալյուր կմաղե, Տատիկս ալյուր կմաղե, Տատիկս ալյուր կմաղե վըր վթներին կշաղեր։ Վըր վթներին կըշաղեր, վեշթո նրան կկողեր։

Տատիկ զալուր կըմաղեր, Տատիկ զալուր կըմաղեր, Տատիկ զալուր կըմաղեր Վըր փեշերուն կըշաղեր: Վըր փեշերուն կըշաղեր, վեշթո նրան կկողեր։

Գնանք տատիկին բերենք լավաշի ալյուր մաղենք Գնանք տատիկին բերենք լավաշի ալյուր մաղենք
Տատիկս ալյուր կմաղե, Տատիկս ալյուր կմաղե, Տատիկս ալյուր կմաղե վըր վթներին կշաղեր։ Վըր վթներին կըշաղեր, վեշթո նրան կկողեր։

Տատիկ զալուր կըմաղեր, Տատիկ զալուր կըմաղեր, Տատիկ զալուր կըմաղեր Վըր փեշերուն կըշաղեր: Վըր փեշերուն կըշաղեր, վեշթո նրան կկողեր։
`
    },
    { type: "image", src: "/images/bread/bread.jpg" },
    { type: "iframe", src: "https://www.youtube.com/embed/jauXEC9TLGg?si=PRlXkROzEFD0MWiC" },
    { type: "video", src: "/videos/bread/krunk.mp4" },
    {
      type: "video",
      src: "/videos/bread/artsakh.mp4"
    },
    {
      type: "video",
      objectFit: "contain",
      src: "/videos/bread/sareri-hovin-mernem.mp4"
    },
    {
      type: "video",
      src: "/videos/bread/duduk.mp4"
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/LvMhfFwP_eI?si=ThtvXFVr68rNPyig"
    },
    {
      type: "video",
      src: "/videos/bread/erebuni.mp4"
    },
    {
      type: "images",
      className: "object-contain",
      images: [
        "/images/bread/working/1.jpg",
        "/images/bread/working/2.jpg",
        "/images/bread/working/3.jpg"
      ]
    },
  ];

  useEffect(() => {
    const handleSlideChange = () => {
      const audios = document.querySelectorAll<HTMLAudioElement>('audio');
      audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });

      const videos = document.querySelectorAll<HTMLVideoElement>('video');
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
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
          <Title heading={1} align="center" className="font-adamathuz">
            Հաց
          </Title>

          <Carousel
            effect="slide"
            className="w-full h-125 md:h-150"
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 1, spaceBetween: 0 },
              1024: { slidesPerView: 1, spaceBetween: 0 },
            }}
          >

            {slides.map((slide, index) => (
              <Carousel.Slide key={index} className="h-full w-full">

                <div
                  className={classNames(
                    "w-full h-full rounded-md overflow-hidden",
                    hasWords(slide) && "flex"
                  )}
                >

                  {slide.type === "iframe" && (
                    <div className={slide.words ? "w-[70%] h-full" : "w-full h-full"}>
                      <iframe
                        className="w-full h-full"
                        src={slide.src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {slide.type === "video" && (
                    <div className={slide.words ? "w-[70%] h-full" : "w-full h-full"}>
                      <video
                        className={classNames(
                          "w-full h-full",
                          slide.objectFit === "contain"
                            ? "object-contain"
                            : slide.objectFit === "cover"
                              ? "object-cover"
                              : "object-cover",
                          slide.className
                        )}
                        src={slide.src}
                        controls
                        playsInline
                      />
                    </div>
                  )}

                  {slide.type === "images" && (
                    <div
                      className={classNames(
                        "grid w-full h-full gap-2",
                        slide.images.length === 1 && "grid-cols-1",
                        slide.images.length === 2 && "grid-cols-2",
                        slide.images.length === 3 && "grid-cols-3",
                        slide.images.length >= 4 && "grid-cols-2 grid-rows-2"
                      )}
                    >
                      {slide.images.map((img, i) => (
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
                      className={classNames(
                        "object-cover object-center w-full h-full",
                        slide.className
                      )}
                    />
                  )}

                  {slide.type === "audios" && (
                    <div
                      className="w-full h-full flex flex-col items-start justify-start gap-6 p-4 bg-cover bg-center"
                      style={{ backgroundImage: "url('/images/bread/audio-bg.jpg')" }}
                    >
                      {slide.audios.map((audio, i) => (
                        <div
                          key={i}
                          className="w-full flex flex-col items-start gap-2 px-24"
                        >
                          <AudioPlayer src={audio} />
                        </div>
                      ))}
                    </div>
                  )}

                  {hasWords(slide) && (
                    <div className="w-[30%] h-full overflow-y-auto bg-black/50 text-white p-4 whitespace-pre-wrap">
                      {slide.words}
                    </div>
                  )}

                </div>

              </Carousel.Slide>
            ))}

          </Carousel>

        </Container>
      </Main>
    </Page>
  );
}