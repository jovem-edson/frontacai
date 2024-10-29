import './index.scss'
import PropTypes from 'prop-types'


const Card = ({ imagem, titulo }) => {
    return(
        <div className='card'>
            <div className='card-imagem-container'>
            <img src={imagem} alt={titulo} className='card-imagem'/>
            </div>

            <button className='card-titulo-container'>
                
            <h3 className='card-titulo'>{titulo}</h3>
            <img src="/assets/images/botoes/setaCard.png" alt='seta'/>
            </button>

        </div>
    )
}

Card.propTypes = {
    imagem : PropTypes.string.isRequired,
    titulo : PropTypes.string.isRequired
}

export default Card