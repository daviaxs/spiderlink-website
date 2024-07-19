import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  className?: string | undefined
}

export function Text({ children, className }: TextProps) {
  return (
    <p
      className={cn(
        `font-bold text-[1.2rem] text-center max-sm:text-[0.9rem] leading-[110%]`,
        className,
      )}
    >
      {children}
    </p>
  )
}
