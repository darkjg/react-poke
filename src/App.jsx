import './App.css';
import { createBrowserRouter } from 'react-router-dom'
import Home from "./Componentes/Home"

const App = createBrowserRouter([
  {
    path: '/',
    children: [
      {path:'/', element: <Home/>}
    ]
  }
])

export default App;
