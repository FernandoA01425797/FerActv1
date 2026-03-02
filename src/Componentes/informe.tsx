import Botton from "./Botton"

type Props = {
  title: string
  value: string
}

export default function Informe({ title, value }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-2xl font-extrabold text-gray-900">{value}</p>

      <div className="mt-4">
        <Botton variant="secondary">View details</Botton>
      </div>
    </div>
  )
}