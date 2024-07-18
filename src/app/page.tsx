import { Button } from '@/shared/components/button/Button'
import SpiderLinkApplicationImgsDemo from '@/shared/assets/imgs/spider-link-application-imgs-demo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/shared/components/texts/Title'
import { Text } from '@/shared/components/texts/Text'
import SpiderLinkBenefitImg001 from '@/shared/assets/imgs/spider-link-benefit-img-001.png'
import SpiderLinkBenefitImg002 from '@/shared/assets/imgs/spider-link-benefit-img-002.png'
import SpiderLinkBenefitImg003 from '@/shared/assets/imgs/spider-link-benefit-img-003.png'

export default function Home() {
  return (
    <>
      <div className="flex items-center w-full justify-between gap-[6rem] max-lg:flex-col max-lg:gap-[4rem]">
        <div className="flex flex-col gap-[1.875rem] max-lg:text-center max-lg:items-center">
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
        <Title className="text-center">Com a SpiderLink, você pode</Title>

        <div className="flex flex-wrap items-center justify-center gap-[5rem]">
          <div className="w-[16.25rem] flex flex-col gap-[1.875rem]">
            <div className="border border-1 border-black rounded-[0.75rem]">
              <Image src={SpiderLinkBenefitImg001} alt="" />
            </div>

            <div>
              <Title className="text-center">Aumentar suas vendas</Title>

              <Text className="text-center opacity-90 font-bold">
                Ofereça aos seus clientes a comodidade de fazer pedidos online e
                reservas.
              </Text>
            </div>
          </div>

          <div className="w-[16.25rem] flex flex-col gap-[1.875rem]">
            <div className="border border-1 border-black rounded-[0.75rem]">
              <Image src={SpiderLinkBenefitImg002} alt="" />
            </div>

            <div>
              <Title className="text-center">Aumentar suas vendas</Title>

              <Text className="text-center opacity-90 font-bold">
                Ofereça aos seus clientes a comodidade de fazer pedidos online e
                reservas.
              </Text>
            </div>
          </div>

          <div className="w-[16.25rem] flex flex-col gap-[1.875rem]">
            <div className="border border-1 border-black rounded-[0.75rem]">
              <Image src={SpiderLinkBenefitImg003} alt="" />
            </div>

            <div>
              <Title className="text-center">Aumentar suas vendas</Title>

              <Text className="text-center opacity-90 font-bold">
                Ofereça aos seus clientes a comodidade de fazer pedidos online e
                reservas.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
