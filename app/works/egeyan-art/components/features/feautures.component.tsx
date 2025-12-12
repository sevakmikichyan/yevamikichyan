"use client";

import { useEffect, useRef, useState } from "react";
import { Block, Flex, Grid } from "@/common/components/layout";
import { Paragraph, Span, Title } from "@/common/components/typography";
import { Button, Card, Carousel, List, Modal, Reveal } from "@/common/components/ui";
import React from "react";
import { Feature, Props } from "./types";
import Image from "next/image";

const Features: React.FC<Props> = ({ ...rest }) => {
  const features: Feature[] = [
    {
      title: "Կիկլադյան արվեստ (մ.թ.ա. 3000–2000)",
      children: (
        <Flex className="flex-col gap-4 py-4">
          <Block className="w-full">
            <Image className="md:mb-lg mb-md" src="/images/egeyan-art/feature-1(1).jpg" alt="Egeyan Art" width={400} height={600} />
            <Block className="w-full md:mb-lg mb-md">
              <Paragraph size="lg">
                Տարածք: Կիկլադյան կղզիներ <br />
                Հայտնի են հատկապես իրենց մարմարե արձանիկներով
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հիմնական առանձնահատկություններ</Title>
              <List listStyleType="disc">
                <List.Item size="lg">Արձանիկները սովորաբար պատրաստված են սպիտակ մարմարից։</List.Item>
                <List.Item size="lg">Ոճը խիստ պարզեցված է. մարմինը՝ հարթ, դեմքը՝ գրեթե առանց դիմանկարային տարրերի (երբեմն միայն քիթը առանձնացված է)։</List.Item>
                <List.Item size="lg">Շատ արձանիկներ ներկայացնում են կանգնած կանանց՝ ձեռքերն առանցքի վրա խաչած։</List.Item>
              </List>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Նշանավոր օրինակներ</Title>
              <List listStyleType="disc">
                <List.Item size="lg">«Կիկլադյան իդոլներ»</List.Item>
                <List.Item size="lg">Երաժշտական թեմայով արձանիկներ (օրինակ՝ լիրա նվագողը)</List.Item>
              </List>
            </Block>
            <Block className="w-full">
              <Title heading={3} color="info" className="mb-md">Նշանավոր օրինակներ</Title>
              <Paragraph>Կիկլադյան գծային պարզությունը հաճախ համեմատվում է մոդեռն արվեստի հետ (Բրանկուզի, Մոդիլիանի և այլն)։</Paragraph>
            </Block>
          </Block>
        </Flex>
      )
    },
    {
      title: "Միկենյան արվեստ (մ.թ.ա. 1600–1100)",
      children: (
        <Flex className="flex-col gap-4 py-4">
          <Block className="w-full">
            <Image className="md:mb-lg mb-md" src="/images/egeyan-art/feature-2(1).jpg" alt="Egeyan Art" width={400} height={600} />
            <Block className="w-full md:mb-lg mb-md">
              <Paragraph size="lg">
                Տարածք՝ Հունաստանի մայր ցամաք, կենտրոն՝ Միկենե, Տիրինս, Փիլոս
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Ընդհանուր բնույթ</Title>
              <Paragraph size="lg">
                Ի տարբերություն Մինոսյանի՝ Միկենյան մշակույթը ավելի ռազմական, հզոր և մոնումենտալ էր։
                Արվեստը հաճախ արտահայտում է իշխանության, հերոսության և պաշտամունքի գաղափարներ։
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md"> Ճարտարապետություն</Title>
              <List listStyleType="disc">
                <List.Item size="lg">Կիկլոպյան պատեր — հսկա քարերով կառուցված ամրոցներ</List.Item>
                <List.Item size="lg">Առյուծների դարպասը Միկենեում՝ ռելիեֆ, որը դարձավ շրջանի խորհրդանիշ</List.Item>
                <List.Item size="lg">Թամբակապ դամբարաններ (օր.՝ «Ատրեոսի գանձարանը»)</List.Item>
              </List>
            </Block>
            <Block className="w-full">
              <Title heading={3} color="info" className="mb-md">Արհեստագործություն</Title>
              <List listStyleType="disc">
                <List.Item size="lg">Ոսկու դիմակներ (հայտնի «Ագամեմնոնի դիմակը», թեև իրականում ոչ նրա ժամանակներից)</List.Item>
                <List.Item size="lg">Թանկարժեք զարդեր</List.Item>
                <List.Item size="lg">Զենքեր՝ դեկորատիվ տարրերով</List.Item>
              </List>
            </Block>
          </Block>
          <Block className="w-full">
            <Title heading={3} color="info" className="mb-md">Նկարչություն և կերամիկա</Title>
            <List listStyleType="disc">
              <List.Item size="lg">Մինոսյանի ազդեցությամբ, սակայն ավելի խիստ, քիչ կորպուսային դինամիկայով</List.Item>
              <List.Item size="lg">Մազմուրային որմնանկարներ ամրոցների ներսում</List.Item>
            </List>
          </Block>
        </Flex >
      )
    },
    {
      title: "Մինոսյան արվեստ (Կրետե, մ.թ.ա. 2000–1450)",
      children: (
        <Flex className="flex-col gap-4 py-4">
          <Block className="w-full">
            <div className="w-full flex overflow-y-hidden overflow-x-scroll md:mb-md mb-sm">
              <Image
                src="/images/egeyan-art/feature-3(1).jpg"
                alt="Egeyan Art"
                width={160}
                height={80}
                className="object-cover w-full"
              />
              <Image
                src="/images/egeyan-art/feature-3(2).jpg"
                alt="Egeyan Art"
                width={160}
                height={80}
                className="object-cover w-full"
              />
            </div>
            <Block className="w-full md:mb-lg mb-md">
              <Paragraph size="lg">
                Կենտրոն՝ Կնոս, Ֆայստոս, Մալիա
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Ընդհանուր բնույթ</Title>
              <List listStyleType="disc">
                <List.Item size="lg">Լույսով և շարժումով լեցուն արվեստ, առանց պատերազմական թեմաների մեծ ազդեցության (գոնե սկզբնական փուլում)։</List.Item>
                <List.Item size="lg">Առանձնանում են պալատական համալիրները, որոնք ունեն լաբիրինթային կառուցվածք։</List.Item>
              </List>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Ճարտարապետություն</Title>
              <List listStyleType="disc">
                <List.Item size="lg">Բազմահարկ պալատներ լայն բակերով</List.Item>
                <List.Item size="lg">Վերականգնված գունագեղ սյուներ՝ վերևից դեպի ներքև նեղացող (օրիգինալ և եզակի)։</List.Item>
              </List>
            </Block>
            <Block className="w-full">
              <Title heading={3} color="info" className="mb-md"> Ֆրեսկաներ (պատկերաքանդակներ)</Title>
              <Paragraph size="lg">Մինոսյան արվեստում ֆրեսկաներն առանձնահատուկ կարևորություն ունեն։ Հայտնի օրինակներ՝</Paragraph>
              <List listStyleType="disc">
                <List.Item size="lg">«Զգլխա ցատկողներ» (bull-leaping) — ներկայացնում է երիտասարդների դինամիկ շարժումներ։</List.Item>
                <List.Item size="lg">«Դելֆինների ֆրեսկո»</List.Item>
                <List.Item size="lg">«Շարմիկ պարուհի» (La Parisienne)</List.Item>
              </List>
            </Block>
          </Block>
          <Block className="w-full">
            <Title heading={3} color="info" className="mb-md">Արհեստներ</Title>
            <List listStyleType="disc">
              <List.Item size="lg">Գունավոր կերամիկա (Կուբո-Վասո ոճ)</List.Item>
              <List.Item size="lg">Ոսկերչություն</List.Item>
              <List.Item size="lg">Մինիատյուրային քարե անոթներ</List.Item>
            </List>
          </Block>
        </Flex >
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
