import { Card } from '@/shared/components/card'
import { Text } from '@/shared/components/texts/Text'
import { TitleH1 } from '@/shared/components/texts/TitleH1'
import { TitleH2 } from '@/shared/components/texts/TitleH2'
import { TitleH3 } from '@/shared/components/texts/TitleH3'
import { WhatWeDo } from './utils/WhatWeDo'

export default function About() {
  return (
    <>
      <div className="max-w-[600px] flex flex-col items-center gap-[1.875rem]">
        <TitleH1>Conheça a SpiderLink</TitleH1>

        <Text className="opacity-90">
          Nesta página, você descobrirá o que motiva a SpiderLink, nosso foco em
          pequenos negócios e como nossas soluções podem transformar a presença
          online do seu Food Service.
        </Text>
      </div>

      <Card.Root>
        <Card.Title>Nossa Missão</Card.Title>

        <Card.Description>
          A SpiderLink tem como missão facilitar a presença online de pequenos
          negócios do setor de Food Service. Acreditamos que toda empresa merece
          um site de qualidade, independente do tamanho ou do orçamento.
        </Card.Description>
      </Card.Root>

      <div className="flex flex-col gap-[1.875rem] w-full">
        <TitleH2>O Que Fazemos</TitleH2>

        <div className="flex flex-col items-center justify-start w-full gap-[1.875rem]">
          {WhatWeDo.map(({ icon, title, description }) => (
            <div
              className="flex gap-7 bg-black bg-opacity-[3%] rounded-[1.25rem] w-full px-[1.875rem] py-[0.938rem]"
              key={title}
            >
              <div className="flex items-center justify-center bg-purple bg-opacity-20 rounded-[1.25rem] min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px]">
                {icon}
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <TitleH3 className="text-purple text-left">{title}</TitleH3>

                <Text className="text-left opacity-90">{description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
