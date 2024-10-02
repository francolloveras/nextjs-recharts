import DailyCard from '@/components/daily-card'

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-y-4">
      <header className="pt-8 pb-2">
        <h1 className="text-3xl font-semibold text-white">Next.js with Recharts</h1>
      </header>
      <section className="flex gap-x-4">
        <DailyCard title="Sales today" range={0} />
        <DailyCard title="Sales 7 days" range={7} />
        <DailyCard title="Sales 30 days" range={30} />
      </section>
    </main>
  )
}
