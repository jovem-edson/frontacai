import './index.scss'

import Cabecalho from '../../components/cabecalho'
import Card from '../../components/card'

export default function Home(){
    return(
        <div className='pagina-home'>
            <Cabecalho/>

            <section className='primeira-secao'>
                <div className='primeira-secao-container'>
                    <h1>O que deseja experimentar hoje?</h1>
                    <div className='sobremesas'>
                        <Card imagem="/assets/images/sobremesas/acai200ml.png"
                              titulo="Açaí - copo 200ml"/>
                    </div>
                </div>

            </section>
        </div>
    )
}