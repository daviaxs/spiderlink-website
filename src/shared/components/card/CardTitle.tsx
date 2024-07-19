import { ReactNode } from 'react'
import { SubTitle } from '../texts/SubTitle'

interface CardTitleProps {
  children: ReactNode
}

export function CardTitle({ children }: CardTitleProps) {
  return <SubTitle className="text-white">{children}</SubTitle>
}
