import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Tech from './components/Tech'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <div className='screen'>
        <Navbar />  
        <main>    
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About/>} />
            <Route path='/work' element={<Work/>} />
            <Route path='/skills' element={<Tech/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
        </main>
      </div>
    </Router>
    
  )
}

export default App
