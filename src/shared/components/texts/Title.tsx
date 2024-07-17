import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  className?: string | undefined
}

export function Title({ children, className }: TitleProps) {
  return (
    <h2 className={cn(`font-black text-[2rem] leading-[110%]`, className)}>
      {children}
    </h2>
  )
}
