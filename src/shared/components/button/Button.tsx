import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string | undefined
}

export function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-3 bg-purple text-white font-extrabold py-3 px-4 rounded-[0.938rem]',
        className,
      )}
    >
      {children}
    </button>
  )
}
