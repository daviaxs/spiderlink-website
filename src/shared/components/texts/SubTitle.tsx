import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface SubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  className?: string | undefined
}

export function SubTitle({ children, className }: SubTitleProps) {
  return (
    <h3
      className={cn(
        `font-black text-[1.5rem] max-sm:text-[1.25rem] leading-[110%]`,
        className,
      )}
    >
      {children}
    </h3>
  )
}
