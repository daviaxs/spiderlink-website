import { ReactNode } from 'react'

interface CardRootProps {
  children: ReactNode
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-black rounded-[1.25rem] gap-[1.875rem] p-[3.75rem]">
      {children}
    </div>
  )
}
