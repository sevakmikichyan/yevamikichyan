"use client"

import { Container, Main, Page } from "@/common/components/layout";
import Header from "@/common/components/layout/header/header.component";
import { Reveal } from "@/common/components/ui";
import Features from "./features/features.component";
import { Paragraph, Title } from "@/common/components/typography";
import { useEffect } from "react";

function HovhannesTumanyan() {
  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.backgroundImage = "url('/images/hovhannes-tumanyan/main.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top";

    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return (
    <Page name="hovhannes-tumanyan">
      <Header />
      <Main>
        <Container>
          <Title heading={2} align="center">Hovhannes Tumanyan</Title>
          <Paragraph size="lg" className="mt-4">
            Hovhannes Tumanyan was a great Armenian poet and writer. He also worked as a public figure. He loved his people and wrote about their life, traditions, feelings, and dreams. His language was simple and clear, so many generations love his works. He is called “The Poet of All Armenians.”
          </Paragraph>
          <Reveal>
            <Features />
          </Reveal>
        </Container>
      </Main>
    </Page>
  );
}

export default HovhannesTumanyan