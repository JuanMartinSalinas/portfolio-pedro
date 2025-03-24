
import Cards from './Components/Cards/Cards'
// import About from './Components/About/About'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards/>}/>
          <Route path="/projects/:id" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
