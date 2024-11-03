'use client'

import {
  Bar,
  BarChart as ImportedBarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { CONTINENTS, CONTINENTS_COLORS } from '@/lib/constants'
import CustomTooltip from '@/ui/custom-tooltip'

interface Props {
  data: {
    name: string
  }[]
}

export default function BarChart({ data }: Props) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <ImportedBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          className="[&>g>g>text]:fill-neutral-400 [&>line]:stroke-neutral-400"
        />
        <YAxis className="[&>g>g>text]:fill-neutral-400 [&>line]:stroke-neutral-400" />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.4)' }} />
        <Legend />
        {Object.values(CONTINENTS).map((continent) => (
          <Bar
            id={continent}
            key={continent}
            layout="vertical"
            stackId="a"
            dataKey={continent}
            fill={CONTINENTS_COLORS[continent]}
          >
            <LabelList
              id={continent}
              dataKey={continent}
              style={{ fill: 'black', fontSize: '12px' }}
            />
          </Bar>
        ))}
      </ImportedBarChart>
    </ResponsiveContainer>
  )
}
