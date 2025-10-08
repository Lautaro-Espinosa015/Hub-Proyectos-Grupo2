

import { Container } from 'react-bootstrap'

import { Route, Routes } from 'react-router-dom'
import Layout from './assets/Components/Layout.jsx'
import Home from './assets/Components/Home.jsx'
import Games from './assets/Components/Games.jsx'
import AboutUs from './assets/Components/AboutUs.jsx'
import Error from './assets/Components/Error.jsx'
function App() {
 

  return (
 <Container>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="games" element={<Games/>} />
      <Route path="aboutus" element={<AboutUs/>} />
      <Route path="*" element={<Error/>} />
    </Route>
  </Routes>
 </Container>
  )
}

export default App
