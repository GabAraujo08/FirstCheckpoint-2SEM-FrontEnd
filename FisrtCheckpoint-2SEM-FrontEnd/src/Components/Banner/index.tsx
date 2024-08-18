import './style.css'
import bannerImg from '../../assets/img/backgroundGow.png'
import iconStarFull from '../../assets/img/IconStarFull.svg'
import iconStar from '../../assets/img/IconStar.svg'
import imgBanner1 from '../../assets/img/bannerImg1.svg'
import imgBanner2 from '../../assets/img/bannerImg2.svg'

const Banner = () => {
  return (
    <main>
      <section>
        <div className='headerBanner'>
          <h1>GOD OF WAR: RAGNAROK</h1>
          <div className="boxAvaliacoes">
            <div className='avaliacaoRatings'>
              <h1>AVALIAÇÃO DA RATINGS</h1>
              <div>
                <i><img src={iconStarFull} alt="" /></i>
                <p>9,6/10</p>
              </div>
            </div>
            <div className='suaAvaliacao'>
              <h1>SUA AVALIAÇÃO</h1>
              <div>
                <i><img src={iconStar} alt="" /></i>
                <p>Avaliar</p>
              </div>
            </div>
          </div>

        </div>
        <div className="imgsBanner">
          <img src={imgBanner1} alt="" />
          <img src={imgBanner2} alt="" />
        </div>
      </section>
    </main>
  );
}

export default Banner