import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function Pedido() {
    return (
        <div className='pagina-pedido'>
            <Cabecalho />
            <section className='primeira-secao-pedido'>
                <div className="primeira-secao-pedido-container">
                <div className="pedido-formulario">
                    <h1>Monte seu Açaí</h1>

                    <div className='secao-opcoes'>
                        <h2>Frutas</h2>
                        <button className='botao-opcoes'>-</button>
                        <span>frutas</span>
                        <button className='botao-opcoes'>+</button>
                    </div>

                    <div className='secao-opcoes'>
                        <h2>Caldas</h2>
                        <button className='botao-opcoes'>-</button>
                        <span>caldas</span>
                        <button className='botao-opcoes'>+</button>
                    </div>

                    <div className='resumo-pedido'>
                        <h2>Resumo do Pedido</h2>
                        <p>Frutas:</p>
                        <p>Caldas:</p>
                        <p>Total: R$</p>
                    </div>

                    <button className='botao-acoes'>Finalizar Pedido</button>
                    <button className='botao-acoes'>Voltar</button>

                    </div>

                </div>
            </section>
        </div>
    )
}