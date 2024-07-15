'use client'

import { SpiderLink } from '@/shared/assets/svgs/spiderlink'
import { useShowHeader } from '@/shared/hooks/useShowHeader'
import { Navigation } from './utils/components/navigation/Navigation'

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

        <Navigation />
      </div>
    </header>
  )
}
