import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { Navigation } from '../navigation/Navigation'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'

export function DropdownMenuHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-black hover:bg-opacity-10 cursor-pointer rounded-md p-1 outline-none">
        <Menu />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col w-56 ml-6 gap-1 p-0">
        <DropdownMenuLabel className="font-bold text-[1.2rem] px-3 py-2 flex items-center justify-start">
          Navegar
        </DropdownMenuLabel>

        <span className="h-px w-full bg-black bg-opacity-20" />

        <DropdownMenuGroup className="p-1">
          <Navigation />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
