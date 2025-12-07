"use client"

import { Block, Flex } from "@/common/components/layout";
import { Title } from "@/common/components/typography";
import { Button, Card, Carousel } from "@/common/components/ui";
import Image from "next/image";
import React from "react";
import { Props } from "./types";
import { useRouter } from "next/navigation";

const Works: React.FC<Props> = ({ ...rest }) => {
  const router = useRouter();

  return (
    <Carousel className="min-h-64 rounded-md" {...rest}>
      <Carousel.Slide className="w-full">
        <Card className="w-full h-full">
          <Flex className="w-full flex-col h-full md:gap-md gap-sm">
            <Block className="w-full h-64 bg-light rounded-md overflow-hidden">
              <Image
                src="/images/armenian-language/main.jpg"
                alt="Armenian Language"
                width={240}
                height={120}
                className="object-cover w-full h-full"
              />
            </Block>
            <Flex className="w-full flex-1 h-full flex-col md:gap-md justify-center gap-sm">
              <Title heading={3}>Հայոց լեզվի նախագծային աշխատանք</Title>
              <Button
                className="w-full"
                onClick={() => router.push("/works/armenian-language")}
              >Տեսնել</Button>
            </Flex>
          </Flex>
        </Card>
      </Carousel.Slide>
    </Carousel>
  );
};

export default Works;