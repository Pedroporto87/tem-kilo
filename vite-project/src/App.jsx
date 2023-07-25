import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import { Footer } from "./components/footer"
import './styles/components/devPorto.scss'


function App() {

  const devPorto = () => {
    window.location.href='https://www.linkedin.com/in/pedro-porto-pp/'
}
  return (
     <>
     <Navbar />
      <Outlet />
     <Footer />
     <section onClick={devPorto} className="devPorto">DevPorto</section>
     </>
  )
}

export default App
