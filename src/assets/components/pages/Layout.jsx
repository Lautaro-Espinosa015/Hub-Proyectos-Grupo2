import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header>
        <h1>Layout</h1>
      </header>
      <main>
        <h2>Cuerpo de la página</h2>
        <Outlet /> {/* <- IMPORTANTE: aquí se renderizan las rutas hijas */}
      </main>
    </>
  )
}

export default Layout