"use client"

import { Container, Main, Page } from "@/common/components/layout";
import Header from "@/common/components/layout/header/header.component";
import { Paragraph, Title } from "@/common/components/typography";
import { Card, Reveal } from "@/common/components/ui";
import { useEffect } from "react";
import Overview from "./components/overview/overwiew.component";
import Features from "./components/features/feautures.component";

export default function EgeyanArt() {
  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.backgroundImage = "url('/images/egeyan-art/main.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backdropFilter = "blur(5px)"

    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return (
    <Page name="armenian-language static">
      <Header />
      <Main className="static">
        <Container className="static">
          <Reveal>
            <Title heading={1} align="center" className="font-adamathuz">Էգեյան արվեստը</Title>
          </Reveal>
          <Reveal>
            <Overview />
          </Reveal>
          <Reveal>
            <Features />
          </Reveal>
          <Reveal>
            <Container size="sm" className="md:mt-lg mt-md">
              <Card>
                <Paragraph size="lg">
                  Էգեյան արվեստի նշանակությունը
                  • Այն հանդիսանում է հին հունական արվեստի հիմքը։
                  • Վաղ եվրոպական բարձր մշակույթներից մեկն է։
                  • Մինոսյան շարժումը և գունային հարուստ օգտագործումը մեծ ազդեցություն ունեցան ուշ հունական և նույնիսկ ուշ ժամանակների արվեստների վրա։
                </Paragraph>
              </Card>
            </Container>
          </Reveal>
        </Container>
      </Main>
    </Page>
  );
}