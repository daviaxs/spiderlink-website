'use client'

import { SpiderLink } from '@/shared/assets/svgs/spiderlink'
import { useShowHeader } from '@/shared/hooks/useShowHeader'
import Link from 'next/link'

export function Header() {
  const showHeader = useShowHeader()

  return (
    <header
      className={`
        sticky bg-white drop-shadow-md w-full h-[4.375rem] px-[1.25rem] py-[0.625rem] top-0 z-10 transition-transform duration-500
        ${showHeader ? '' : 'transform -translate-y-full'}
        `}
    >
      <div className="flex items-center gap-6">
        <SpiderLink />

        <nav>
          <ul className="flex gap-4 text-black">
            <Link href={'/'}>
              <li className="font-bold">SpiderLink</li>
            </Link>

            <Link href={'/about'}>
              <li className="font-bold">Sobre</li>
            </Link>

            <Link href={'/plans'}>
              <li className="font-bold">Planos</li>
            </Link>

            <Link href={'/faq'}>
              <li className="font-bold">FAQ</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
