import { ReactNode } from 'react'
import { Text } from '../texts/Text'

interface CardDescriptionProps {
  children: ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
  return <Text className="text-white opacity-90">{children}</Text>
}
