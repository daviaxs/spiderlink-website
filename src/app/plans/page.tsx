import { SpiderLink } from '@/shared/assets/svgs/spiderlink'
import Link from 'next/link'

export default function PlansPage() {
  return (
    <div>
      <header
        className="
        flex justify-center items-center bg-white w-full h-[4.375rem] px-[1.25rem] py-[0.625rem]"
      >
        <Link href="/" className="flex items-center justify-center gap-2">
          <SpiderLink />

          <p className="font-bold text-[1.5rem]">SpiderLink</p>
        </Link>
      </header>
    </div>
  )
}
