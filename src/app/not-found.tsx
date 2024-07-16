import { Button } from '@/shared/components/button/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-black text-[4rem] leading-[100%] max-sm:text-[3rem]">
          Erro 404 &#41;:
        </h1>

        <p className="font-bold text-[1.3rem] max-sm:text-[1rem]">
          Página não encontrada
        </p>
      </div>

      <Link href="/">
        <Button>Voltar</Button>
      </Link>
    </main>
  )
}
