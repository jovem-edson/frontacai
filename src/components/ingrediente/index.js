import './index.scss';

export default function IngredienteSection({ title, items, onAdd, onRemove }) {
    return (
        <div className='secao-opcoes'>
            <h2>{title}</h2>
            <div className='ingredientes-lista'>
                {items.map((item, index) => (
                    <div key={index} className='ingrediente-item'>
                        <img src={item.image} alt={item.name} className='ingrediente-imagem' />
                        <h3 className='ingrediente-nome'>{item.name}</h3>
                        <div className='ingrediente-controle'>
                            <button onClick={() => onRemove(index)} className='botao-opcoes'>-</button>
                            <h3 className='ingrediente-quantidade'>{item.quantity}</h3>
                            <button onClick={() => onAdd(index)} className='botao-opcoes'>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
