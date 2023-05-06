import { BannerHome } from "../components/banner-home"
import { HomeConteiner } from "../components/home-conteiner"
import { Cards } from '../components/cards'

const Home = () => {
  return (
    <main>
      <BannerHome />
      <HomeConteiner />
      <Cards />
    </main>
  )
}

export default Home