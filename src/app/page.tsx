import { Button } from '@/shared/components/button/Button'
import SpiderLinkApplicationImgsDemo from '@/shared/assets/imgs/spider-link-application-imgs-demo.png'
import Image from 'next/image'
import Link from 'next/link'

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
        <h2 className="font-black text-[2rem] leading-[110%]">
          Pronto para transformar seu negócio?
        </h2>

        <div>
          <p className="font-extrabold text-[1.2rem] opacity-90">
            Descubra como a SpiderLink pode revolucionar seu Food Service.
          </p>
          <p className="font-extrabold text-[1.2rem] opacity-90">
            Agende uma{' '}
            <Link href={'/plans'} className="text-purple">
              Demonstração Gratuita
            </Link>{' '}
            e veja nossas soluções em ação!
          </p>
        </div>

        <div>
          <div className="absolute w-[55px] h-[66px] outline outline-1 top-0 left-0 rounded-br-[1.875rem]" />
          <div className="absolute w-[55px] h-[66px] outline outline-1 bottom-0 right-0 rounded-tl-[1.875rem]" />
        </div>
      </div>
    </>
  )
}
