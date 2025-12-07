
import { Container, Main, Page } from "@/common/components/layout";
import Header from "@/common/components/layout/header/header.component";
import { Title } from "@/common/components/typography";
import { Works } from "./components";
import Head from "next/head";

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
            <Title heading={1} align="center">Եվա Միկիչյան</Title>
            <Title heading={2} align="center">Նախագծային աշխատանքներ</Title>
            <Works className="md:mt-lg mt-md" />
          </Container>
        </Main>
      </Page>
    </>
  );
}