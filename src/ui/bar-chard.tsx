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

import CustomTooltip from '@/ui/custom-tooltip'

interface Props {
  data: {
    name: string
  }[]
  provinces: {
    name: string
    color: string
  }[]
}

export default function BarChart({ data, provinces }: Props) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <ImportedBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          className="[&>g>g>text]:fill-on-surface/80 [&>line]:stroke-on-surface/80"
        />
        <YAxis className="[&>g>g>text]:fill-on-surface/80 [&>line]:stroke-on-surface/80" />
        <Tooltip
          content={(props) => <CustomTooltip {...props} />}
          cursor={{ fill: 'rgba(0, 0, 0, 0.4)' }}
        />
        <Legend />
        {provinces.map(({ name, color }) => (
          <Bar id={name} key={name} layout="vertical" stackId="a" dataKey={name} fill={color}>
            <LabelList id={name} dataKey={name} style={{ fill: 'black', fontSize: '12px' }} />
          </Bar>
        ))}
      </ImportedBarChart>
    </ResponsiveContainer>
  )
}
