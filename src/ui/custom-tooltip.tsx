import { TooltipProps } from 'recharts'

type Props = TooltipProps<number | string | Array<number | string>, number | string>

export default function CustomTooltip({ active, payload, label }: Props) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <ul className="rounded-md border border-neutral-600 bg-neutral-800 px-2.5 py-1 text-sm">
      {typeof label === 'string' && label && <p>{label}:</p>}
      {payload.map(({ dataKey, name, value, color, payload }) => (
        <li key={dataKey} className="flex items-center gap-x-1">
          {(payload.color || color) && (
            <span
              className="block size-2 rounded-full"
              style={{ backgroundColor: payload.color ?? color }}
            />
          )}
          {name}: {value}
        </li>
      ))}
    </ul>
  )
}
