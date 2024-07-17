import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className: string | undefined
}

export function Text({ children, className }: TextProps) {
  return (
    <p className={cn(`font-extrabold text-[1.2rem]`, className)}>{children}</p>
  )
}
