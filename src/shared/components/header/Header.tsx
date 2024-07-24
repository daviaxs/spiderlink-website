'use client'

import { SpiderLink } from '@/shared/assets/svgs/spiderlink'
import { useShowHeader } from '@/shared/hooks/useShowHeader'
import { Button } from '../button/Button'
import { Handshake } from 'lucide-react'
import { DropdownMenuHeader } from './utils/components/dropdown-menu-header/DropdownMenuHeader'
import Link from 'next/link'

export function Header() {
  const showHeader = useShowHeader()

  return (
    <header
      className={`
        sticky flex justify-between items-center bg-white drop-shadow-md w-full h-[4.375rem] px-[1.25rem] py-[0.625rem] top-0 z-10 transition-transform duration-500
        ${showHeader ? '' : 'transform -translate-y-full'}
        `}
    >
      <Link href="/">
        <div className="flex items-center gap-4">
          <DropdownMenuHeader />

          <div className="flex items-center justify-center gap-2">
            <SpiderLink />
            <p className="font-bold text-[1.5rem] max-sm:hidden">SpiderLink</p>
          </div>
        </div>
      </Link>

      <Link href="/plans">
        <Button className="h-full">
          <p className="max-sm:text-[0.7rem] text-white">COMECE GRÁTIS</p>
          <Handshake className="max-sm:hidden" />
        </Button>
      </Link>
    </header>
  )
}
