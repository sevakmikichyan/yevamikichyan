import { Block, Container, Grid } from "@/common/components/layout";
import { Paragraph } from "@/common/components/typography";
import { Card, Carousel } from "@/common/components/ui";
import Image from "next/image";
import React from "react";

const Overview: React.FC = () => {
  const images = [
    "/images/egeyan-art/main.jpg",
    "/images/egeyan-art/main-2.jpg",
    "/images/egeyan-art/main-3.jpg",
  ];

  return (
    <Block>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-lg gap-md rounded-md md:mt-lg mt-md">
        {images.map((img: string) => {
          return (
            <Image key={img} src={img} alt="Egeyan Art" width={240} height={160} className="w-full" />
          )
        })}
      </div>
      <Container size="sm">
        <Card className="w-full md:mt-md mt-sm">
          <Paragraph size="lg">
            Էգեյան արվեստը (մ.թ.ա. մոտ 3000–1100 թթ.) ընդգրկում է Էգեյան ծովի արևելյան հատվածում ձևավորված երեք հիմնական մշակույթների արվեստը՝ Կիկладյան, Մինոսյան (Կրետե) և Միկենյան (Հունաստան). Ստորև ներկայացնում եմ դրանցից յուրաքանչյուրի մանրամասն ու հասկանալի բնութագիրը։
          </Paragraph>
        </Card>
      </Container>
    </Block>
  );
};

export default Overview;