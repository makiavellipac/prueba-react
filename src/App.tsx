import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Carousel from './Pages/Carrousel/Carousel';
import Employees from './Pages/Employees/Employees';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrusel" element={<Carousel />} />
            <Route path="/empleados" element={<Employees />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
