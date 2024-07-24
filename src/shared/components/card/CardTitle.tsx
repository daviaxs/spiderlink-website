import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { TitleH3 } from '../texts/TitleH3'

interface CardTitleProps {
  children: ReactNode
  className?: string | undefined
}

export function CardTitle({ className, children }: CardTitleProps) {
  return <TitleH3 className={cn('text-white', className)}>{children}</TitleH3>
}
