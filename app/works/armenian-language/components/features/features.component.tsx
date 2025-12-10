"use client";

import { useEffect, useRef, useState } from "react";
import { Block, Flex, Grid } from "@/common/components/layout";
import { Paragraph, Span, Title } from "@/common/components/typography";
import { Audio, Button, Card, Carousel, List, Modal, Reveal } from "@/common/components/ui";
import React from "react";
import { Feature, Props } from "./types";
import Image from "next/image";

const Features: React.FC<Props> = ({ ...rest }) => {
  const prayerImages = [
    "/images/armenian-language/prayer-slides/slide-1.jpg",
    "/images/armenian-language/prayer-slides/slide-2.jpg",
    "/images/armenian-language/prayer-slides/slide-3.jpg"
  ];

  const slides = [
    "/images/armenian-language/slides/slide-1.jpg",
    "/images/armenian-language/slides/slide-3.jpg",
    "/images/armenian-language/slides/slide-2.jpg",
    "/images/armenian-language/slides/slide-4.jpg",
  ];

  const features: Feature[] = [
    {
      title: "Այբուբենի տառաշարքը և հնչյունային կառուցվածքը",
      children: (
        <Flex className="flex-col gap-4 py-4">
          <Block className="w-full">
            <Paragraph size="lg">
              Հայոց այբուբենը ստեղծվել է 405 թ. Մեսրոպ Մաշտոցի կողմից՝ հայ ժողովրդի կրթական,
              կրոնական և մշակութային զարգացման նպատակով։
            </Paragraph>
            <Paragraph size="lg">
              Այն բաղկացած է 39 տառից, որոնցից
            </Paragraph>
            <List listStyleType="disc">
              <List.Item size="lg">36-ը հին հայերենում են ստեղծվել Մեսրոպ Մաշտոցի կողմից,</List.Item>
              <List.Item size="lg">3-ը՝ օ, ֆ, և եվ, ավելացվել են ավելի ուշ՝ միջնադարում։</List.Item>
            </List>
          </Block>
          <Block className="w-full">
            <Paragraph size="lg">
              Տառերը բաժանվում են երկու հիմնական խմբի՝
            </Paragraph>
            <List listStyleType="disc">
              <List.Item size="lg"><Span className="font-bold" color="error">Մեծատառեր</Span>՝ օգտագործվում են նախադասության սկզբում, անձնանունների, տեղանունների և կարևոր բառերի գրության ժամանակ։</List.Item>
              <List.Item size="lg"><Span className="font-bold" color="error">Փոքրատառեր</Span>՝ օգտագործվում են գրավոր խոսքի մեջ սովորաբար։</List.Item>
            </List>
          </Block>
          <Block className="w-full">
            <Paragraph size="lg">
              Հայոց այբուբենը ունի նաև թվային նշանակություն՝ յուրաքանչյուր տառ ներկայացնում է որոշակի թիվ (Ա = 1, Բ = 2, Գ = 3, … Թ = 9, Ժ = 10 և այլն)։
            </Paragraph>
          </Block>
          <Block className="w-full mt-8">
            <Title color="info" heading={3} className="mb-md">Հայոց լեզվի հնչյունային համակարգ</Title>
            <Paragraph size="lg">
              Հայերենը հնչյունաբանական համակարգ ունեցող լեզու է, որտեղ յուրաքանչյուր տառ (գրանշան) հիմնականում համապատասխանում է մեկ հնչյունի։
              Հայոց լեզվում հնչյունները բաժանվում են երկու խումբ՝
            </Paragraph>
            <List type="ol" listStyleType="decimal">
              <List.Item size="lg">
                <Span className="font-bold" color="error">Ձայնավորներ </Span>
                Դրանք արտաբերվում են առանց խանգարումների և կազմում են վանկի հիմքը։
                Հայերենում կա 7 ձայնավոր հնչյուն՝
                ա, ե, է, ի, ո, օ, ու։
              </List.Item>
              <List.Item size="lg">
                <Span className="font-bold" color="error">Բաղաձայններ </Span>
                Դրանք արտաբերվում են արգելքներով՝ շուրթերի, լեզվի, ատամների և քմի մասնակցությամբ։
                Բաղաձայնները բաժանվում են՝
                • պայթյունայիններ (բ, պ, դ, տ, գ, կ),
                • շնչեղներ (փ, թ, խ),
                • նազալներ (մ, ն),
                • շրթնայիններ և ատամնայիններ (վ, ֆ, ս, զ, ձ, ծ, ց),
                • հնչեղներ (ր, լ, ղ, ժ, շ, չ, ջ, հ)։
              </List.Item>
            </List>
          </Block>
        </Flex>
      )
    },
    {
      title: "Համեմատում այլ գրային համակարգերի հետ",
      children: (
        <Block>
          <Flex className="flex-col gap-4 py-4">
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հայերեն – հունարեն</Title>
              <Paragraph size="lg">
                Հայոց գրությունը և հունարենը երկուսն էլ ամբողջական ալֆաբետներ են․ դրանք ունակ են գրի առնել ինչպես բաղաձայնները, այնպես էլ ձայնավորները։ Հունարենն աշխարհում առաջին գրային համակարգերից էր, որ սկսեց լիարժեք նշել ձայնավորները, իսկ հայերենն արդեն հենց սկզբից ստեղծվեց այդ սկզբունքով։
                Չնայած որոշ տառաձևեր կարող են մակերեսային նմանություն ունենալ, հայերեն այբուբենը ծագմամբ անմիջականորեն հունարենից չի բխում։ Տառերի ձևը, կառուցվածքը և հնչյունային տրամաբանությունը ինքնուրույն մշակված են։ Հնչյունային համակարգը հայերենում զգալիորեն ավելի բազմազան է, իսկ տառերի թիվը՝ ավելի մեծ, ինչը համընկնում է հայերենի հնչյունաբանական հարստությանը։
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հայերեն – ասորերեն</Title>
              <Paragraph size="lg">
                Ասորերենը սեմական «աբջադ» է․ այսինքն՝ այն հիմնականում գրի է առնում միայն բաղաձայնները, իսկ ձայնավորները կամ բաց են թողնվում, կամ նշվում դիակրիտիկներով։ Հայերենը սկզբունքորեն տարբերվում է, քանի որ այն լիարժեք ալֆաբետ է՝ յուրաքանչյուր ձայնավորի համար առանձին նշանով։
                Գրության ուղղությունը նույնպես տարբեր է․ հայերենը գրվում է ձախից աջ, իսկ ասորերենը՝ աջից ձախ։ Տառաձևերը կառուցվածքային առումով էլ կապ չունեն․ ասորերենը կապակցվող, շղթայական գիր է, մինչ դերը հայերեն տառերը առանձին, հստակ և անկյունավոր են ստեղծվել։
                Չնայած պատմականորեն ասորերենն ու հայերենը շփման մեջ են եղել, հայոց գիրը չի բխել ասորերենից․ Մաշտոցը ճանաչում էր ասորերենը, բայց ստեղծած համակարգը հիմնովին նոր էր։
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հայերեն – փյունիկյան</Title>
              <Paragraph size="lg">
                Փյունիկյանը հին սեմական բաղաձայնագիր համակարգ է։ Այն համարվում է հունարենի նախատիպը, բայց հայոց գրության հետ ուղղակի ժառանգական կապ չունի։ Հայերենը, ի տարբերություն փյունիկյանի, միանգամից ներառում է ձայնավորների ամբողջական շարք։
                Տառաձևերն ու կառուցվածքը նույնպես աղերս չունեն։ Փյունիկյանը շատ ավելի պարզ ու գծային է, իսկ հայերենը՝ բազմաձև, կուռ կառուցվածքով և ավելի հարուստ հնչյունային ներկայացմամբ։
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հայերեն – վրացերեն</Title>
              <Paragraph size="lg">
                Վրաց այբուբենը ևս ստեղծվել է մոտավորապես նույն դարաշրջանում։ Սա հանգեցրել է այն մտքին, որ դրանք կարող են փոխազդեցություն ունենալ, բայց որևէ ուղղակի ծագում չի ընդունվում։ Վրացերենը ունի իր սեփական գրաֆիկական ոճը և ձայնավորների առանձին նշաններ, սակայն հայերենին համեմատ ավելի փոքր հնչյունային և տառային համակարգ։
                Հայերենի ու վրացերենի նմանությունները հիմնականում պայմանավորված են ժամանակաշրջանի ընդհանուր մշակութային միջավայրով, ոչ թե փոխադարձ ծագումով։
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հայերեն – լատինագիր</Title>
              <Paragraph size="lg">
                Լատինական այբուբենը նույնպես ալֆաբետ է, սակայն նրա և հայերենի միջև էական տարբերություններ կան։ Լատիներենում նույն տառը կարող է ներկայացնել տարբեր հնչյուններ (օրինակ՝ c կամ g), իսկ հայերենը ավելի մոտ է «մեկ հնչյուն – մեկ տառ» սկզբունքին։
                Հայերենը ավելի հնչյունային ճշգրտությամբ է կառուցված, և ունի շատ ավելին համապատասխանող տառեր՝ հայերենի հնչյունական համակարգին համապատասխան։
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հայերեն – ռուսերեն (ակնարկային համեմատություն)</Title>
              <Paragraph size="lg">
                Ռուսերենը գրվում է կիրիլյան գրով, որը ձևավորվել է հունարեն գրից՝ սլավոնական լեզուներին հարմարեցված։ Հայերենը՝ մաշտոցյան այբուբենով, որը ամբողջովին նոր ստեղծված համակարգ է և համապատասխանում է հայերենի հնչյունաբանությանը։
              </Paragraph>
              <Paragraph size="lg" className="md:mt-md mt-sm">
                Հայերենը մոտ է «մեկ հնչյուն – մեկ տառ» սկզբունքին։ Ռուսերենում դա այդպես չէ․ նույն տառը կարող է տարբեր կերպ հնչել, կախված շեշտից, դիրքից կամ փափկացումից։
              </Paragraph>
              <Paragraph size="lg" className="md:mt-md mt-sm">
                Հայերենում չկա փափկացման համակարգ։ Ռուսերենում շատ բաղաձայններ ունեն երկու ձև՝ կոշտ և փափուկ, ինչը ազդում է ձայնավորների վրա էլ։
              </Paragraph>
              <Paragraph size="lg" className="md:mt-md mt-sm">
                Գեղագրորեն հայերենն ավելի ինքնատիպ է և հատուկ է ստեղծվել հայոց լեզվի համար։ Կիրիլյան գիրը ավելի պարզ կառուցվածք ունի և սլավոնական լեզվախմբի համար ընդհանուր է։
              </Paragraph>
            </Block>
            <Block className="w-full">
              <Title heading={3} color="info" className="mb-md">Ընդհանուր եզրակացություն</Title>
              <Paragraph size="lg">
                Հայոց այբուբենը չի բխում մեկ կոնկրետ համակարգից։ Այն ստեղծվել է ամբողջովին նոր, մտածված և հնչյունաբանորեն հարմարված հայերենի համար։
                Մաշտոցը ծանոթ էր հունարենին, արամեերեն/ասորերենին, ինչպես նաև շրջանի այլ գրերին, բայց դրանցից միայն դիտավորությամբ վերցրեց ընդհանուր գաղափարներ, ոչ թե ձևեր։ Այս պատճառով հայոց այբուբենը աշխարհի ամենամշակված ու հստակ հնչյունային համակարգերից է։
              </Paragraph>
            </Block>
          </Flex>
        </Block>
      )
    },
    {
      title: "Հայոց այբուբենի գաղտնիքներն ու յուրահատկությոընները",
      children: (
        <Block>
          <Flex className="flex-col gap-4 py-4">
            <Paragraph size="lg">
              Հայոց այբուբենը միայն տառերի հավաքածու չէ. <br />
              Յուրաքանչյուր տառ իր մեջ կրում է հոգևոր աղոթք, լույսի ու ձայնի սահմռկեցնող համը։
              Անցյալից եկած այն հնչյունները, որոնք օրհնվում են բերանով, դարձել են աղոթքի գիծ ու տեսք։
              Բառերը ծնվում են լուռ մտքից, բայց հնչում են՝ ինչպես ձայնի ու հոգու խաչմերուկ։
              Ա, Բ, Գ… յուրաքանչյուր տառ մի նոտա է, մի շնչառություն, մի աղոթքի սկիզբ։
              Այբուբենի շարքերից հյուսվում է հայի հոգու քարտեզը, ձայնով ու լռությամբ միասին։
              Տառերի մեջ թաքնված է մեղմություն, ուժ, ու հույս, որ պահում է դարերի խորքը։
              Արարիչի հետ խոսք ասող յուրաքանչյուր տառ՝ աղոթքի մի փոքրիկ բաբախում է։
              Ու երբ հայը խոսում է կամ գրում, նա միանգամից աղոթում է, ու այս աղոթքը թափանցում է ժամանակի միջով։
              Այբուբենը մեզ տալիս է խոսքի լույսը, հոգու խաղաղությունը ու հավերժության շնչառությունը։
            </Paragraph>
            <Carousel className="w-full h-[300px] md:h-[400px]" breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}>
              {prayerImages.map((prayer, index) => {
                return (
                  <Carousel.Slide key={index} className="h-full">
                    <div className="w-full h-full rouded-md overflow-hidden">
                      <Image
                        src={prayer}
                        alt="Prayer"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Carousel.Slide>
                )
              })}
            </Carousel>
          </Flex>
        </Block>
      )
    },
    {
      title: "Մեսրոպ Մաշտոցի կյանքը, կրթությունը և գործունեությունը",
      children: (
        <Block>
          <Flex className="flex-col gap-4 py-4">
            <div className="w-full flex overflow-y-hidden overflow-x-scroll">
              <Image
                src="/images/armenian-language/mesrop-mashtoc-1.jpg"
                alt="Մեսրոպ Մաշտոց"
                width={160}
                height={80}
                className="object-cover w-full"
              />
              <Image
                src="/images/armenian-language/mesrop-mashtoc-2.jpg"
                alt="Մեսրոպ Մաշտոց"
                width={160}
                height={80}
                className="object-cover w-full"
              />
              <Image
                src="/images/armenian-language/mesrop-mashtoc-3.jpg"
                alt="Մեսրոպ Մաշտոց"
                width={160}
                height={80}
                className="object-cover w-full"
              />
            </div>
            <List listStyleType="disc">
              <List.Item size="lg">
                <Span color="error" className="font-bold">Ծնունդը - </Span>
                Մեսրոպ Մաշտոցը ծնվել է մոտ 361 թ. Տարոն գավառում՝ Հացեկաց գյուղում (ըստ ավանդական աղբյուրների)։
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Կրթությունը - </Span>
                Ուսանել է հունարեն և պարսկերեն, լավ ծանոթ էր նաև ասորական գրությանը։
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Պետական ծառայություն - </Span>
                Երիտասարդ ժամանակ ծառայել է հայոց արքունիքում՝ որպես զինվորական կամ կառավարիչ (աղբյուրները տարբեր են)։
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Դարձը դեպի եկեղեցի - </Span>
                Թողնելով պետական ծառայությունը՝ Մաշտոցը ձեռնադրվում է հոգևորական և նվիրվում քարոզչական գործունեությանը։
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Հայոց գրերի ստեղծումը (405 թ.) - </Span>
                Իր մեծագույն գործը՝ <br />
                • Ստեղծեց հայոց այբուբենը, <br />
                • Նպատակ՝ հայերենով Սուրբ Գրքի և ուսումնագիտական գործերի տարածում, <br />
                • Աշխատել է Սահակ Պարթևի աջակցությամբ։ <br />
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Դպրոցների հիմնում - </Span>
                Մաշտոցը հիմնել է բազմաթիվ դպրոցներ Արցախում, Գողթնում, Սյունյում, այլ վայրերում՝ գրագիտությունը տարածելու համար։
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Թարգմանչական շարժում - </Span>
                Նրա նախաձեռնությամբ սկսվեց «Ոսկեդարը» համարվող մեծ թարգմանչական շրջանը․ հայերեն թարգմանվեց Սուրբ Գիրքը և բազմաթիվ դասական ու եկեղեցական աշխատություններ։
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Այլ այբուբենների ստեղծում - </Span>
                Մաշտոցը մասնակցել է նաև աղվանական և վրացական գրերի ստեղծման կամ դասակարգման աշխատանքներին (ըստ միջնադարյան աղբյուրների)։
              </List.Item>
              <List.Item size="lg">
                <Span color="error" className="font-bold">Մահը - </Span>
                Մահացել է 440 թ., թաղված է Օշականում, որտեղ այսօր գտնվում է նրա հուշահամալիրը։
              </List.Item>
            </List>
          </Flex>
        </Block>
      )
    },
    {
      title: "Մեսրոպ Մաշտոցի մասին ասույթներ",
      children: (
        <Block>
          <Flex className="flex-col gap-4 py-4">
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Մովսես Խորենացի</Title>
              <Paragraph size="lg">
                «Մտքով՝ ստեղծող, խոսքով՝ պայծառ, գործով՝ համբերող, սիրով՝ անկեղծ, սովորեցնելու մեջ՝ չձանձրացող, և որ նրա (Մեսրոպ Մաշտոցի) վարքի մեջ ամբարտավանությունը և մարդահաճությունը երբեք չկարողացան տեղ գտնել»։
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Հակոբ Մանանդյան</Title>
              <Paragraph size="lg">
                «Մեսրոպ Մաշտոցի գյուտը, անտարակույս, այն հզոր զենքն էր, որի շնորհիվ հայ ժողովուրդը պահպանեց իր գոյությունը V դարի մեծ պայքարում և մտնելով քաղաքակրթված հնագույն ժողովուրդների ընտանիքի մեջ՝ զարգացրեց իր ինքնուրույն մշակույթն ու շատ հարուստ գրականությունը»:
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Ավետիք Իսահակյան</Title>
              <Paragraph size="lg">
                «Մայրենի լեզվի բառերը մենք զգում ենք, ապրում, իսկ օտար լեզվինը հասկանում, սովորում, հիշում»:<br />
                «Մեր լեզուն բարձր լեռներից և խորունկ ձորերից ծնած լեզու է բարձունքների և խորությունների լեզու»:<br />
                «Լեզուն փոխարինել է և պետություն, և բանակ, և բերդ; Ժողովուրդների պատմական փորձը ապացուցեց, որ երբ մի ոտնահարված, ստրկացած ժողովուրդ պահում է իր լեզուն, նա ունի իր ազատության բանալին իր ձեռքում»:<br />
                «Հայոց լեզվի մեջ մարմնացած է հայ ժողովրդի հոգին; Ամեն մի բառը նրա հոգու մի կտորն է: »<br />
                «...Նրա համար ծով արյուն են թափել մեր նախնիները»:
              </Paragraph>
            </Block>
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Վահան Տերյան</Title>
              <Paragraph size="lg">
                «Լեզուն ազգի հոգին է. կենդանի է այդ հոգին կենդանի է ազգը, կենսունակ է առաջինը, ուրեմն կենսունակ է և երկրորդը»:
              </Paragraph>
            </Block>
            <Block className="w-full">
              <Title heading={3} color="info" className="mb-md">Դանիել Վարուժան</Title>
              <Paragraph size="lg">
                «...փառք հայ տառերուն...»
                «Հայ լեզուն այդ տառերու սանդղամատերուն վրա ոտն առ ոտն բարձրացավ ամեն դարու ճակատին վրա հոն փորագրելու համար անմահությունը մեր ցեղի»:
              </Paragraph>
            </Block>
          </Flex>
        </Block>
      )
    },
    {
      title: "Սահակ Պարթև, Վռամշապուհ և այլք",
      children: (
        <Block>
          <Flex className="flex-col gap-4 py-4">
            <Block className="w-full md:mb-lg mb-md">
              <Title heading={3} color="info" className="mb-md">Սահակ Պարթեւ (Սահակ Ա Պարթև)</Title>
              <Paragraph size="lg">
                Հայ առաքելական եկեղեցու կաթողիկոս (387 թ-ից)։
              </Paragraph>
              <Paragraph size="lg" className="md:mt-md mt-sm">
                Բավականաչափ լավ տիրապետում էր հունարենին, ասորերենին, պարսկերենին:
              </Paragraph>
              <Paragraph size="lg" className="md:mt-md mt-sm">
                Աղբյուրները նշում են, որ նա էր աջակցել Մաշտոցին եւ եւս ընկած է գործընթացի մեջ՝ հայկական գրերի ստեղծման եւ դպրոցահիմնման գործում։
              </Paragraph>
              <div className="w-full flex overflow-y-hidden overflow-x-scroll md:mt-md mt-sm">
                <Image
                  src="/images/armenian-language/sahak-partev-1.jpg"
                  alt="Sahak Partev"
                  width={160}
                  height={80}
                  className="object-cover w-full"
                />
                <Image
                  src="/images/armenian-language/sahak-partev-2.jpg"
                  alt="Sahak Partev"
                  width={160}
                  height={80}
                  className="object-cover w-full md:block hidden"
                />
              </div>
            </Block>
            <Block className="w-full">
              <Title heading={3} color="info" className="mb-md">Վռամշապուհ (Վռամշապուհ թագավոր)</Title>
              <Paragraph size="lg">
                Արքայություն է ունեցել 389–414 թթ. շրջանառությամբ։
              </Paragraph>
              <Paragraph size="lg" className="md:mt-md mt-sm">
                Աղբյուրներով՝ հենց Վռամշապուհն է եղել այն հովանավորը, ով ստեղծման գործընթացին տրամադրել է նյութական աջակցություն, և նրա օրոք իրականացվել է այբուբենի ստեղծման աշխատանքը։
              </Paragraph>
              <div className="w-full flex overflow-y-hidden overflow-x-scroll md:mt-md mt-sm">
                <Image
                  src="/images/armenian-language/vramshapuh-1.jpg"
                  alt="Vramshapuh"
                  width={160}
                  height={80}
                  className="object-cover w-full"
                />
                <Image
                  src="/images/armenian-language/vramshapuh-2.jpg"
                  alt="Vramshapuh"
                  width={160}
                  height={80}
                  className="object-cover w-full md:block hidden"
                />
              </div>
            </Block>
          </Flex>
        </Block>
      )
    },
    {
      title: "Այբ Բեն ԳԻմ",
      children: (
        <Block>
          <Flex className="flex-col gap-4 py-4">
            <Block className="w-full md:mb-lg mb-md">
              <Carousel
                effect="cube"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-[300px] md:h-[400px]"
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}>
                {slides.map((prayer, index) => {
                  return (
                    <Carousel.Slide key={index} className="h-full">
                      <div className="w-full h-full rouded-md overflow-hidden">
                        <Image
                          src={prayer}
                          alt="Alphabet"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Carousel.Slide>
                  )
                })}
              </Carousel>
              <audio src="/audios/alphabet.mp3" controls className="w-full md:mt-md mt-sm" />
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
