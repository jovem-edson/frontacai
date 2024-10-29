import './index.scss'

export default function Cabecalho() {
    return (
        <header className='cabecalho'>
            <div className='cabecalho-container'>
                <h1 className='cabecalho-titulo'>
                    Açaí Los Primos
                </h1>

                <nav  className='cabecalho-nav'>
                    <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link totem'>
                        Totem
                    </a>

                    <p className='pedidos'>|</p>

                    <a href='../../pages/Home/index.js' className='cabecalho-nav-item-link pedidos'>
                        Pedidos
                    </a>
                </nav>

                <button className='cabecalho-botao'>
                    Login
                    <img src='/assets/images/botoes/Enter.png' alt='enter' />
                </button>

            </div>
        </header>
    )
}