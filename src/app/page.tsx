import { Button } from '@/shared/components/button/Button'
import SpiderLinkApplicationImgsDemo from '@/shared/assets/imgs/spider-link-application-imgs-demo.png'
import Image from 'next/image'

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

            <p className="text-black font-bold text-[1rem] leading-tight opacity-90 max-sm:text-[0.8rem]">
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
    </>
  )
}
