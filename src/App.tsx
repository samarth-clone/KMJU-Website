import Home from './pages/Home'
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Events from './pages/Events';
import News from './pages/News';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import './App.css'

function App() {

  return (
    <>
    <main className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/events" Component={Events} />
          <Route path="/news" Component={News} />
          <Route path="/membership" Component={Membership} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </main>
    </>
  )
}

export default App
