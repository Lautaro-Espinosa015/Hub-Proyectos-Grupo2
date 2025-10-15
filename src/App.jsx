import { Routes, Route } from 'react-router-dom';
import Layout from './assets/Pages/Layout'
import Home from './assets/Pages/Home'
import Games from './assets/Pages/Games'
import AboutUs from './assets/Pages/AboutUs'
import Error from './assets/Pages/Error'
import Proyecto2 from './assets/Pages/Proyecto2'
import PetRegistry from './assets/RegistroMascotas/PetRegistry'
import Proyecto4 from './assets/Pages/Proyecto4'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='games' element={<Games />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='proyecto2' element={<Proyecto2 />} />
        <Route path='pet-registry' element={<PetRegistry />} />
        <Route path='proyecto4' element={<Proyecto4 />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App