import { Card } from '@/shared/components/card'
import { Text } from '@/shared/components/texts/Text'
import { Title } from '@/shared/components/texts/Title'

export default function About() {
  return (
    <>
      <div className="max-w-[600px] flex flex-col items-center gap-[1.875rem]">
        <Title className="text-[3rem] leading-tight">
          Conheça a SpiderLink
        </Title>

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
    </>
  )
}
