"use client"

import { Container, Main, Page } from "@/common/components/layout"
import Header from "@/common/components/layout/header/header.component"
import { Card, Reveal, Table } from "@/common/components/ui"

export default function ArmenianBattles() {
  const data = [
    {
      id: 1,
      battle: "Մարաթոնի ճակատամարտ",
      year: "մ.թ.ա. 490 թ.",
      commander: "Միլթիադես",
      sides: "Հույներ – Պարսիկներ",
      strategy: "Կենտրոնի թուլացում և թևերի ուժեղ հարված",
    },
    {
      id: 2,
      battle: "Գավգամելայի ճակատամարտ",
      year: "մ.թ.ա. 331 թ.",
      commander: "Ալեքսանդր Մակեդոնացի",
      sides: "Մակեդոնիա – Պարսկաստան",
      strategy: "Արագ հարձակում, կեղծ նահանջ, ճեղքում կենտրոնում",
    },
    {
      id: 3,
      battle: "Կաննեի ճակատամարտ",
      year: "մ.թ.ա. 216 թ.",
      commander: "Հաննիբալ",
      sides: "Կարթագեն – Հռոմ",
      strategy: "Կրկնակի շրջափակում (օղակաձև շրջափակում)",
    },
  ]

  return (
    <Page name="armenian-battles">
      <Header />
      <Main>
        <Container>
          <Reveal>
            <Card>
              <Table
                data={data}
                renderRow={(item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.battle}</Table.Cell>
                    <Table.Cell>{item.year}</Table.Cell>
                    <Table.Cell>{item.commander}</Table.Cell>
                    <Table.Cell>{item.sides}</Table.Cell>
                    <Table.Cell>{item.strategy}</Table.Cell>
                  </Table.Row>
                )}
              >
                <Table.Head>
                  <Table.Row>
                    <Table.Cell className="text-primary" head>Ճակատամարտ</Table.Cell>
                    <Table.Cell className="text-primary" head>Թիվ</Table.Cell>
                    <Table.Cell className="text-primary" head>Զորավար</Table.Cell>
                    <Table.Cell className="text-primary" head>Հակամարտող կողմեր</Table.Cell>
                    <Table.Cell className="text-primary" head>Մարտավարություն</Table.Cell>
                  </Table.Row>
                </Table.Head>
              </Table>
            </Card>
          </Reveal>
        </Container>
      </Main>
    </Page>
  )
}
