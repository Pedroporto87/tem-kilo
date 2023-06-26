import { BannerHome } from "../components/banner-home"
import { HomeConteiner } from "../components/home-conteiner"
import { Cards } from '../components/cards'
import { HomeBanner } from "../components/home-banner"
import { JapaConteiner } from "../components/home-japan-conteiner"
import { BbqConteiner } from "../components/home-bbq-conteiner"
import { BbqBanner } from "../components/bbq-banner"

const Home = () => {
  return (
    <main>
      <BannerHome />
      <HomeConteiner />
      <Cards />
      <BbqBanner/>
      <BbqConteiner />
      <HomeBanner />
      <JapaConteiner />
    </main>
  )
}

export default Home