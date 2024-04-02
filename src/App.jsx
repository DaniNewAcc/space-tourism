import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Index';
import Home from './pages/Home/Page';
import Destination from './pages/Destination/Page';
import Crew from './pages/Crew/Page';
import Technology from './pages/Technology/Page';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Destination' element={<Destination />} />
        <Route path='/Crew' element={<Crew />} />
        <Route path='/Technology' element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
