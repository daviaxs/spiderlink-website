import Link from 'next/link'
import { navigationLinks } from '../../navigationLinks'

export function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4 text-black">
        {navigationLinks.map(({ href, label }) => (
          <Link key={label} href={href}>
            <li className="font-bold">{label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
