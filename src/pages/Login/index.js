import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function Home() {
    return (
        <div className='pagina-login'>
            <Cabecalho />
            <section className='primeira-secao-login'>
            <div className="primeira-secao-login-container">
    <div className="quadro-boas-vindas">
        <h1>Bem-vindo, Colaborador!</h1>
        <img src="/assets/images/pessoas/colaboradora.svg" alt="Colaboradora" />
    </div>

    <div className="quadro-login">
        <form className="formulario">
            <h2>Login</h2>
            <div className="campo-formulario-nomes">
                <div className="campo-formulario">
                    <input className="campo-formulario-input" type="text" name="nome" placeholder='Insira o usuário de rede...' />
                </div>

                <div className="campo-formulario">
                    <input className="campo-formulario-input" type="password" name="senha" placeholder='Insira sua senha...' />
                </div>
            </div>
            <div>
                <input className="campo-formulario-botao" type="submit" value="Enviar" />
            </div>
        </form>
    </div>
</div>
            </section>

        </div>

    )

}