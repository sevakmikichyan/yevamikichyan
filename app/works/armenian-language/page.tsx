"use client"

import { Container, Main, Page } from "@/common/components/layout";
import Header from "@/common/components/layout/header/header.component";
import { Title } from "@/common/components/typography";
import Features from "./components/features/features.component";
import { useEffect } from "react";

export default function ArmenianLanguage() {
  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.backgroundImage = "url('/images/armenian-language/mesrop-mashtoc-2.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return (
    <Page name="armenian-language static">
      <Header />
      <Main className="static">
        <Container className="static">
          <Title heading={1} align="center">Հայոց լեզու</Title>
          <Features />
        </Container>
      </Main>
    </Page>
  )
}