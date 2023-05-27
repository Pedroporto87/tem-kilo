import { BannerHome } from "../components/banner-home"
import { HomeConteiner } from "../components/home-conteiner"
import { Cards } from '../components/cards'
import { HomeBanner } from "../components/home-banner"
import { JapaConteiner } from "../components/home-japan-conteiner"
import { BbqConteiner } from "../components/home-bbq-conteiner"

const Home = () => {
  return (
    <main>
      <BannerHome />
      <HomeConteiner />
      <Cards />
      <HomeBanner />
      <JapaConteiner />
      <BbqConteiner />
    </main>
  )
}

export default Home