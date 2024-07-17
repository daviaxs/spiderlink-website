import Link from 'next/link'
import { navigationLinks } from '../../navigationLinks'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'

export function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {navigationLinks.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="p-2 hover:bg-black hover:bg-opacity-10 rounded-md"
          >
            <DropdownMenuItem className="font-bold outline-none">
              {label}
            </DropdownMenuItem>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
