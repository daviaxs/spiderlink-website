import { ReactNode } from 'react'
import { SubTitle } from '../texts/SubTitle'
import { cn } from '@/lib/utils'

interface CardTitleProps {
  children: ReactNode
  className?: string | undefined
}

export function CardTitle({ className, children }: CardTitleProps) {
  return <SubTitle className={cn('text-white', className)}>{children}</SubTitle>
}
