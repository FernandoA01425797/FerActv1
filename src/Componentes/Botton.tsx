type Props = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}

export default function Botton({ children, onClick, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-gray-300 hover:bg-gray-50"

  return (
    <button type="button" onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  )
}