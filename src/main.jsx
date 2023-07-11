
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import { Buffet } from './pages/buffet'
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
        path:"/buffet",
        element: <Buffet/>,
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
