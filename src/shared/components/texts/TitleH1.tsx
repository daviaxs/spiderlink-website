import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface TitleH1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  className?: string | undefined
}

export function TitleH1({ children, className }: TitleH1Props) {
  return (
    <h1
      className={cn(
        'font-black text-[3rem] leading-tight max-sm:text-[2rem]',
        className,
      )}
    >
      {children}
    </h1>
  )
}
