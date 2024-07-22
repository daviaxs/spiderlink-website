import { Button } from '@/shared/components/button/Button'
import SpiderLinkApplicationImgsDemo from '@/shared/assets/imgs/spider-link-application-imgs-demo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/shared/components/texts/Title'
import { Text } from '@/shared/components/texts/Text'
import { Benefits01 } from './utils/Benefits01'
import { SubTitle } from '@/shared/components/texts/SubTitle'
import { Card } from '@/shared/components/card'
import { Benefits02 } from './utils/Benefits02'
import { ChevronRight } from 'lucide-react'
import { Services } from './utils/Services'

export default function Home() {
  return (
    <>
      <div className="flex items-center w-full justify-between gap-[6rem] max-lg:flex-col max-lg:gap-[4rem]">
        <div className="flex flex-col gap-[1.875rem] max-lg:text-center max-lg:items-center lg:w-[50%]">
          <div>
            <h1 className="font-black text-[3rem] leading-tight max-sm:text-[2rem]">
              Descomplique a Gestão do Seu{' '}
              <span className="text-purple">Food Service.</span>
            </h1>

            <p className="font-bold text-[1rem] leading-tight opacity-90 max-sm:text-[0.8rem]">
              Transforme a presença online do seu restaurante com a SpiderLink,
              a plataforma que facilita a criação e gerenciamento do seu site de
              Food Service. Aumente a visibilidade e atraia mais clientes com
              uma solução simples e eficaz.
            </p>
          </div>

          <Button className="w-fit">AGENDE UM TESTE</Button>
        </div>

        <Image src={SpiderLinkApplicationImgsDemo} alt="" />
      </div>

      <div className="relative flex flex-col outline outline-1 rounded-[1.25rem] gap-[1.875rem] w-full h-fit py-[4.375rem] px-[1.875rem] text-center overflow-hidden">
        <Title>Pronto para transformar seu negócio?</Title>

        <div>
          <Text className="opacity-90">
            Descubra como a SpiderLink pode revolucionar seu Food Service.{' '}
          </Text>
          <Text className="opacity-90">
            Agende uma{' '}
            <Link
              href={'/plans'}
              className="text-purple underline-offset-1 underline"
            >
              Demonstração Gratuita
            </Link>{' '}
            e veja nossas soluções em ação!
          </Text>
        </div>

        <div>
          <div className="absolute w-[55px] h-[66px] outline outline-1 top-0 left-0 rounded-br-[1.875rem]" />
          <div className="absolute w-[55px] h-[66px] outline outline-1 bottom-0 right-0 rounded-tl-[1.875rem]" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-start gap-[1.875rem]">
        <Title>Com a SpiderLink, você pode</Title>

        <div className="flex flex-wrap items-start justify-center gap-[5rem]">
          {Benefits01.map(({ img, title, description }) => (
            <div
              className="w-[16.25rem] flex flex-col gap-[1.875rem]"
              key={title}
            >
              <div className="border border-1 border-black rounded-[0.75rem]">
                <Image src={img} alt="" />
              </div>

              <div className="flex flex-col gap-[1.25rem]">
                <SubTitle>{title}</SubTitle>

                <Text className="opacity-90 font-bold">{description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card.Root>
        <Card.Title>Economize Sem Comprometer a Qualidade</Card.Title>

        <Card.Description>
          Na SpiderLink, entendemos que cada centavo conta, especialmente para
          pequenos negócios. Por isso, oferecemos soluções acessíveis que não
          sacrificam a qualidade. Nosso objetivo é ajudar seu Food Service a
          brilhar online sem pesar no seu bolso.
        </Card.Description>
      </Card.Root>

      <div className="flex flex-col gap-[1.875rem]">
        <Title>Benefícios</Title>

        <div className="flex flex-wrap items-start justify-center gap-[3.75rem]">
          {Benefits02.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-start gap-[1.25rem] w-[250px]"
            >
              <div className="bg-purple bg-opacity-20 flex items-center justify-center w-[50px] h-[50px] rounded-xl">
                {icon}
              </div>

              <div className="flex flex-col items-center justify-start gap-[1.25rem]">
                <SubTitle>{title}</SubTitle>

                <Text className="opacity-90">{description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card.Root className="bg-purple">
        <Card.Title>Sua Confiança é Nossa Prioridade</Card.Title>

        <Card.Description className="opacity-100">
          Na SpiderLink, sabemos que a confiança é fundamental para qualquer
          parceria de sucesso. É por isso que nos dedicamos a oferecer um
          serviço de qualidade e suporte excepcional para garantir que você se
          sinta seguro ao escolher nossa plataforma.
        </Card.Description>

        <Link href={'/plans'}>
          <Button className="bg-white text-black">
            <p className="font-black">COMECE HOJE MESMO</p>
            <ChevronRight />
          </Button>
        </Link>
      </Card.Root>

      <div className="flex flex-col items-center justify-start gap-[1.875rem]">
        <Title>Experimente Gratuitamente por 2 Semanas</Title>
        <Text>Descubra a revolução do seu Food Service sem compromisso.</Text>

        <div className="flex flex-wrap items-start justify-center gap-[5rem]">
          {Services.map(({ img, title, description }) => (
            <div
              className="w-[16.25rem] flex flex-col gap-[1.25rem]"
              key={title}
            >
              <div className="flex flex-col items-center justify-between border border-1 border-black rounded-[0.75rem] overflow-hidden pt-2">
                <Image
                  src={img}
                  alt=""
                  className="w-[230px] h-[187px]"
                  priority
                />

                <div className="flex items-center justify-center bg-purple py-3 w-full">
                  <SubTitle className="text-white font-extrabold">
                    {title}
                  </SubTitle>
                </div>
              </div>

              <Text>{description}</Text>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
