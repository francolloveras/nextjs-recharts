import DailyCard from '@/components/daily-card'
import MonthCard from '@/components/month-card'

export default function Home() {
  return (
    <main className="flex max-w-7xl mx-auto flex-col gap-y-4">
      <header className="pt-8 text-center pb-2">
        <h1 className="text-3xl font-semibold text-white">Next.js with Recharts</h1>
      </header>
      <section className="flex gap-x-4">
        <DailyCard title="Sales today" range={0} />
        <DailyCard title="Sales 7 days" range={7} />
        <DailyCard title="Sales 30 days" range={30} />
      </section>
      <section className="h-72 w-full rounded-md border border-neutral-600 bg-neutral-900 px-6 py-4">
        <MonthCard />
      </section>
    </main>
  )
}
