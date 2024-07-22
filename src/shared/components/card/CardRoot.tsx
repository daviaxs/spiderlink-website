import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardRootProps {
  children: ReactNode
  className?: string | undefined
}

export function CardRoot({ className, children }: CardRootProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center bg-black rounded-[1.25rem] gap-[1.875rem] p-[3.75rem] max-md:px-[1.25rem]',
        className,
      )}
    >
      {children}
    </div>
  )
}
