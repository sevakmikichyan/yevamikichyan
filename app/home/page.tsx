
import { Container, Main, Page } from "@/common/components/layout";
import Header from "@/common/components/layout/header/header.component";
import { Title } from "@/common/components/typography";
import { Works } from "./components";
import Head from "next/head";
import { Reveal } from "@/common/components/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Եվա Միկիչյան | Նախագծային աշխատանքներ</title>
      </Head>
      <Page name="Home">
        <Header />
        <Main>
          <Container>
            <Reveal>
              <Title heading={1} align="center" className="font-adamathuz">Եվա Միկիչյան</Title>
              <Title heading={2} align="center" className="font-adamathuz">Նախագծային աշխատանքներ</Title>
            </Reveal>
            <Reveal>
              <Works className="md:mt-lg mt-md" />
            </Reveal>
          </Container>
        </Main>
      </Page>
    </>
  );
}