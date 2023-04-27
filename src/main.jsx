
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import { Sobre } from './pages/about'
import { Contato } from './pages/contato.jsx'
import App from './App.jsx'
import './styles/main.scss'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/sobre",
        element: <Sobre />,
      },
      {
        path:"/contato",
        element: <Contato />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
