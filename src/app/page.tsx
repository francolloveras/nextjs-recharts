import { Suspense } from 'react'

import DailyCard from '@/components/daily-card'
import MonthCard from '@/components/month-card'
import DailyCardSkeleton from '@/ui/daily-card-skeleton'

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-7xl flex-1 flex-col gap-y-4">
      <section className="flex gap-x-4">
        <Suspense fallback={<DailyCardSkeleton />}>
          <DailyCard title="Sales today" range={0} />
        </Suspense>
        <Suspense fallback={<DailyCardSkeleton />}>
          <DailyCard title="Sales 7 days" range={7} timeout={2000} />
        </Suspense>
        <Suspense fallback={<DailyCardSkeleton />}>
          <DailyCard title="Sales 30 days" range={30} timeout={4000} />
        </Suspense>
      </section>
      <section className="h-72 w-full rounded-md border border-neutral-600 bg-neutral-900 px-6 py-4">
        <MonthCard />
      </section>
    </main>
  )
}
