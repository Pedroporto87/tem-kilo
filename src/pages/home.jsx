import { BannerHome } from "../components/banner-home"
import { HomeConteiner } from "../components/home-conteiner"
import { Cards } from '../components/cards'
import { HomeBanner } from "../components/home-banner"

const Home = () => {
  return (
    <main>
      <BannerHome />
      <HomeConteiner />
      <Cards />
      <HomeBanner />
    </main>
  )
}

export default Home