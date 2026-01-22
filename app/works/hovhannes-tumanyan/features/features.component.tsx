"use client";

import { useEffect, useRef, useState } from "react";
import { Block, Flex, Grid } from "@/common/components/layout";
import { Paragraph, Span, Title } from "@/common/components/typography";
import { Button, Card, Carousel, List, Modal, Reveal } from "@/common/components/ui";
import React from "react";
import { Feature, Props } from "./types";
import Image from "next/image";

const Features: React.FC<Props> = ({ ...rest }) => {
  const family = [
    "/images/hovhannes-tumanyan/img-2.jpg",
    "/images/hovhannes-tumanyan/img-3.jpg",
  ]

  const features: Feature[] = [
    {
      title: "Birth",
      children: (
        <Block className="w-full">
          <Image
            src="/images/hovhannes-tumanyan/img-1.jpg"
            alt="Hovhannes Tumanyan"
            width={250}
            height={500}
            className="float-left mr-4 mb-4"
          />
          <Paragraph size="lg">
            Hovhannes Tumanyan was born on February 19, 1869, in the village of Dsegh, in the Lori region. On February 15, he was baptized and was given his grandfather’s name, Hovhannes.
            The Tumanyan family was large. He had four brothers and three sisters.
          </Paragraph>
        </Block>
      )
    },
    {
      title: "Study",
      children: (
        <Block className="w-full">
          <Paragraph size="lg" className="mb-4">
            Hovhannes Tumanyan first studied at the village school in Dsegh, then continued his education in Tiflis at the Nersisian School. Although he did not finish school, he read a lot and educated himself. He worked as a writer, poet, and public figure. He also took part in cultural and social activities to help his people.
          </Paragraph>
        </Block>
      )
    },
    {
      title: "Wrote",
      children: (
        <Block className="w-full">
          <Paragraph size="lg" className="mb-4">
            Tumanyan wrote his first work at the age of 12. <br />
            Tumanyan wrote:
            <List listStyleType="disc">
              <List.Item size="lg">
                lyric poems
              </List.Item>
              <List.Item size="lg">
                narrative poems
              </List.Item>
              <List.Item size="lg">
                ballads
              </List.Item>
              <List.Item size="lg">
                fairy tales
              </List.Item>
              <List.Item size="lg">
                short stories
              </List.Item>
            </List>
          </Paragraph>
        </Block>
      )
    },
    {
      title: "Poems and major works",
      children: (
        <Block className="w-full">
          <List listStyleType="disc">
            <List.Item size="lg">
              “Anush” – about village life, love, and tragedy
            </List.Item>
            <List.Item size="lg">
              “The Capture of Tmkaberd” – a patriotic, historical poem
            </List.Item>
            <List.Item size="lg">
              “Maro” and “Sasuntsi Davit” (adaptation)
            </List.Item>
          </List>
        </Block>
      )
    },
    {
      title: "Short stories",
      children: (
        <Block className="w-full">
          <List listStyleType="disc">
            <List.Item size="lg">
              “Gikor” – գյուղից քաղաք եկած տղայի ողբերգական ճակատագիրը
            </List.Item>
            <List.Item size="lg">
              “Metsarents”
            </List.Item>
            <List.Item size="lg">
              Նրա պատմվածքները պատկերում են սովորական մարդկանց կյանքը
            </List.Item>
          </List>
        </Block>
      )
    },
    {
      title: "Famous fairy tales",
      children: (
        <Block className="w-full">
          <List listStyleType="disc">
            <List.Item size="lg">
              “Kaj Nazar”
            </List.Item>
            <List.Item size="lg">
              “Anban Hurin”
            </List.Item>
            <List.Item size="lg">
              “The Dog and the Cat”
            </List.Item>
          </List>
        </Block>
      )
    },
    {
      title: "Marriage and family",
      children: (
        <Block className="w-full">
          <List listStyleType="disc">
            <List.Item size="lg">
              Ամուսնացել է Օլգա Մաճկալյանի հետ 1891 թվականին
            </List.Item>
            <List.Item size="lg">
              Ունեցել են 10 երեխա
            </List.Item>
            <List.Item size="lg">
              Ընտանիքը կարևոր դեր է ունեցել նրա կյանքի և ստեղծագործության մեջ
            </List.Item>
          </List>
        </Block>
      )
    },
    {
      title: "Final years and death",
      children: (
        <Block className="w-full">
          <List listStyleType="disc">
            <List.Item size="lg">
              Կյանքի վերջին տարիներին հիվանդ էր
            </List.Item>
            <List.Item size="lg">
              Մահացել է 1923 թվականի մարտի 23-ին՝ Մոսկվայում
            </List.Item>
            <List.Item size="lg">
              Հետագայում նրա աճյունը տեղափոխվել է Երևան
            </List.Item>
          </List>
        </Block>
      )
    },
    {
      title: "Vernatun",
      children: (
        <Block className="w-full">
          <Paragraph size="lg" className="mb-4">
            In 1899, on his initiative, a literary group called “Vernatun” was established in Tiflis. Its members included Hovhannes Tumanyan, Derenik Demirchian, Levon Shant, Ghazaros Aghayan, Avetik Isahakyan, Nikol Aghbalian, and others. With some interruptions, the group was active until 1908.
          </Paragraph>
        </Block>
      )
    },
    {
      title: "Conclusion",
      children: (
        <Block>
          <Flex className="flex-col gap-4 py-4">
            <Block className="w-full md:mb-lg mb-md">
              <Carousel
                effect="slide"
                className="w-full h-[300px] md:h-[400px]"
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                }}>
                {family.map((img, index) => {
                  return (
                    <Carousel.Slide key={index} className="h-full">
                      <div className="w-full h-full rouded-md overflow-hidden">
                        <Image
                          src={img}
                          alt="Family"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Carousel.Slide>
                  )
                })}
              </Carousel>
            </Block>
            <Block className="w-full">
              <Paragraph size="lg">
                Hovhannes Tumanyan was not only a great poet and writer but also a person who loved his people and cared about their life and culture. His works, full of feelings, wisdom, and lessons, continue to inspire generations. He remains one of the most important figures in Armenian literature and is rightly called “The Poet of All Armenians.”
              </Paragraph>
            </Block>
          </Flex>
        </Block>
      )
    }
  ];

  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex > 0) {
      setSelectedFeatureIndex(selectedFeatureIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex < features.length - 1) {
      setSelectedFeatureIndex(selectedFeatureIndex + 1);
    }
  };

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [selectedFeatureIndex]);

  const handleOpenModal = (index: number) => {
    setSelectedFeatureIndex(index);
    requestAnimationFrame(() => {
      modalContentRef.current?.scrollTo(0, 0);
    });
  };

  const handleCloseModal = () => {
    setSelectedFeatureIndex(null);
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  return (
    <>
      <Grid className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-lg gap-md rounded-md md:mt-lg mt-md">
        {features.map((feature, index) => (
          <Reveal key={index} delay={index * .1}>
            <Carousel.Slide className="w-full">
              <Card className="w-full h-full">
                <Flex className="w-full flex-1 h-full flex-col md:gap-md justify-between gap-sm">
                  <Title heading={3}>{feature.title}</Title>
                  <Button className="w-full" onClick={() => handleOpenModal(index)}>
                    Տեսնել
                  </Button>
                </Flex>
              </Card>
            </Carousel.Slide>
          </Reveal>
        ))}
      </Grid>

      {selectedFeatureIndex !== null && (
        <Modal isOpen={selectedFeatureIndex !== null} onClose={handleCloseModal} zIndex={100}>
          <Title heading={2} color="primary" className="mb-lg" align="center">
            {features[selectedFeatureIndex].title}
          </Title>
          <div className="mb-lg">{features[selectedFeatureIndex].children}</div>
          <div className="flex justify-between w-full">
            <Button
              paddingSize="sm"
              onClick={handlePrev}
              disabled={selectedFeatureIndex === 0}
              className="w-1/2 mr-2"
            >
              ◀ Նախորդ
            </Button>
            <Button
              paddingSize="sm"
              onClick={handleNext}
              disabled={selectedFeatureIndex === features.length - 1}
              className="w-1/2 ml-2"
            >
              Հաջորդ ▶
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Features;
