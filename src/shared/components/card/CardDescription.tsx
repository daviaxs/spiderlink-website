import { ReactNode } from 'react'
import { Text } from '../texts/Text'
import { cn } from '@/lib/utils'

interface CardDescriptionProps {
  children: ReactNode
  className?: string | undefined
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <Text className={cn('text-white opacity-90', className)}>{children}</Text>
  )
}
