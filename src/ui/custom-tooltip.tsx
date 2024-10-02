import { TooltipProps } from 'recharts'

type Props = TooltipProps<number | string | Array<number | string>, number | string>

export default function CustomTooltip({ active, payload, label }: Props) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <ul className="tooltip-container">
      {typeof label === 'string' && label && <p>{label}:</p>}
      {payload.map(({ dataKey, name, value, color, payload }) => (
        <li key={dataKey} className="tooltip-item">
          {(payload.color || color) && (
            <span
              className="tooltip-block-color"
              style={{ backgroundColor: payload.color ?? color }}
            />
          )}
          {name}: {value}
        </li>
      ))}
    </ul>
  )
}
