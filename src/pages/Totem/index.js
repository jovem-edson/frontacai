import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function Totem() {
    return (
        <div className='pagina-totem'>
            <Cabecalho />
            <section className='primeira-secao-totem'>
                <div className="primeira-secao-totem-container">
                    <div className='totem-preparo'>
                        <div className='totem-titulo'>
                            <h1>
                                Em Preparo
                            </h1>
                        </div>

                        <div className='totem-conteudo'>
                            
                        </div>
                    </div>

                    <div className='totem-retirar'>
                        <div className='totem-titulo'>
                            <h1>
                                Retirar
                            </h1>
                        </div>

                        <div className='totem-conteudo'>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}   