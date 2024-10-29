import './index.scss'
import PropTypes from 'prop-types'


const Card = ({ imagem, titulo }) => {
    return(
        <div className='card'>
            <img src={imagem} alt={titulo} className='card-imagem'/>
            <h3 className='card-titulo'>{titulo}</h3>
        </div>
    )
}

Card.propTypes = {
    imagem : PropTypes.string.isRequired,
    titulo : PropTypes.string.isRequired
}

export default Card