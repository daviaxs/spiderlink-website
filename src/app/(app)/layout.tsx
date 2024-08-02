import { Header } from '@/shared/components/header/Header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center px-[3.75rem] py-[2rem] gap-[3.75rem] max-md:px-[2rem] max-sm:px-[1rem]">
        {children}
      </main>
    </div>
  )
}
