import Botton from "./Componentes/Botton"
import Informe from "./Componentes/informe"

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Mini React App</h1>
      </header>

      
      <main className="flex-1 p-6 bg-gray-50 flex items-center justify-center">
        <div className="space-y-6 text-center">
          <Informe title="Users" value="1200" />
          <Botton>Click me</Botton>
        </div>
      </main>

      
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2026 My App
      </footer>

    </div>
  )
}

export default App