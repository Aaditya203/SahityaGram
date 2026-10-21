import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Routes>
        {/* comment */}
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
