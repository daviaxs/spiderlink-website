import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-black text-[4rem] leading-[100%]">
          Erro 404 &#41;:
        </h1>

        <p className="font-bold text-[1.3rem]">Página não encontrada</p>
      </div>

      <Link href="/">
        <button className="bg-purple px-4 py-2 rounded-lg font-bold text-white">
          Voltar
        </button>
      </Link>
    </main>
  )
}
