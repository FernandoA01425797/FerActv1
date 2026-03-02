type Item = {
  label: string
  href: string
}

const items: Item[] = [
  { label: "Dashboard", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Settings", href: "#" },
]

export default function menu() {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}