import './style.css'
import iconArrow from '../../assets/img/iconArrow.svg'
import iconMais from '../../assets/img/iconMais.svg'
import AvaliacaoSemSpoiler from '../AvaliacaoSemSpoiler';

const Avaliacoes = () => {
    return (
        <section className='avaliacoes'>
            <div className="headerAvaliacoes">
                <div className="imagemEtitulo">
                    <img src={iconArrow} alt="" />
                    <h1>Avaliações de usuários</h1>
                </div>
                <div className='avaliar'>
                    <img src={iconMais} alt="" />
                    <h1>Avaliar</h1>
                </div>
            </div>
            <AvaliacaoSemSpoiler />
        </section>
    );
}

export default Avaliacoes