import './App.css'
import AppBarComponent from './components/AppBar'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { home, tramos, clientes, top, error404 } from './Pages';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <AppBarComponent />
          <Routes>
            <Route path="/test_frontEnd_infoDesign" element={home} />
            <Route path="test_frontEnd_infoDesign/tramos" element={tramos} />
            <Route path="test_frontEnd_infoDesign/clientes" element={clientes} />
            <Route path="test_frontEnd_infoDesign/top" element={top} />
            <Route path="test_frontEnd_infoDesign/*" element={error404} />
          </Routes>
        </BrowserRouter >
      </div >
    </>
  )
}

export default App
