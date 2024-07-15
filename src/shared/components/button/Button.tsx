import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="flex items-center justify-center gap-3 bg-purple text-white font-extrabold py-3 px-4 rounded-[0.938rem]">
      {children}
    </button>
  )
}
