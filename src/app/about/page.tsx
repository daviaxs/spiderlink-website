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
    </>
  )
}
