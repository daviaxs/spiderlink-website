import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface TitleH3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  className?: string | undefined
}

export function TitleH3({ children, className }: TitleH3Props) {
  return (
    <h3
      className={cn(
        `font-black text-[1.5rem] text-center max-sm:text-[1.25rem] leading-[110%]`,
        className,
      )}
    >
      {children}
    </h3>
  )
}
