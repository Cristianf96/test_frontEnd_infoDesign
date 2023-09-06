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
            <Route path="/" element={home} />
            <Route path="/tramos" element={tramos} />
            <Route path="/clientes" element={clientes} />
            <Route path="/top" element={top} />
            <Route path="/*" element={error404} />
          </Routes>
        </BrowserRouter >
      </div >
    </>
  )
}

export default App
