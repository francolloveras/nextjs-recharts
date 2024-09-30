'use client'

import {
  ResponsiveContainer,
  PieChart as ImportedPieChart,
  Pie,
  Cell,
  Label,
  Tooltip
} from 'recharts'

interface Props {
  data: {
    name: string
    value: number
    color: string
  }[]
  total: number
}

export default function PieChart({ data, total }: Props) {
  const defaultData = [{ name: 'No data', value: 1, color: '#808080' }]
  const parsedData = data.length > 0 ? data : defaultData

  return (
    <ResponsiveContainer height={180} width="40%">
      <ImportedPieChart>
        <Pie
          data={parsedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          paddingAngle={4}
          innerRadius={40}
        >
          {parsedData.map(({ name, value, color }) => (
            <Cell key={`cell-${name}-${value}`} fill={color} strokeWidth={0} />
          ))}
          <Label position="center" value={`Total ${total}`} fill="#e5e5e5" fontSize={14} />
        </Pie>
        {/* TODO ADD CUSTOM TOOLTIP */}
        {/* <Tooltip content={<CustomTooltip />} /> */}
        <Tooltip />
      </ImportedPieChart>
    </ResponsiveContainer>
  )
}
