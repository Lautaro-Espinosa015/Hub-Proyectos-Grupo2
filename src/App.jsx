import './App.css'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Layout from './assets/components/pages/Layout'
import Home from './assets/components/pages/Home'
import Games from './assets/components/pages/Games'
import AboutUs from './assets/components/pages/AboutUs'
import Error from './assets/components/pages/Error'

function App() {
  return (
    <Container>
      <h1>Hola Za Warudo!</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='games' element={<Games />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App