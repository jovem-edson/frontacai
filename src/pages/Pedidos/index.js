import './index.scss';

import React, { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import IngredienteSection from '../../components/ingrediente';

export default function Pedido() {
    const [frutas, setFrutas] = useState([
        { name: 'Banana', price: 2.00, quantity: 0, image: '/assets/images/frutas/banana.png' },
        { name: 'Morango', price: 3.50, quantity: 0, image: '/assets/images/frutas/strawberry.png' },
        { name: 'Manga', price: 2.50, quantity: 0, image: '/assets/images/frutas/mango.png' },
        
    ]);

    const [caldas, setCaldas] = useState([
        { name: 'Chocolate', price: 1.50, quantity: 0, image: '/assets/images/caldas/chocolate-syrup.png' },
        { name: 'Morango', price: 1.80, quantity: 0, image: '/assets/images/caldas/strawberry-syrup.png' },
        { name: 'Manga', price: 1.70, quantity: 0, image: '/assets/images/caldas/mango-syrup.png' },
    ]);

    const handleAdd = (index, setState, items) => {
        const newItems = [...items];
        newItems[index].quantity += 1;
        setState(newItems);
    };

    const handleRemove = (index, setState, items) => {
        const newItems = [...items];
        if (newItems[index].quantity > 0) {
            newItems[index].quantity -= 1;
            setState(newItems);
        }
    };

    const calcularTotal = () => {
        const totalFrutas = frutas.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalCaldas = caldas.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return totalFrutas + totalCaldas;
    };

    return (
        <div className='pagina-pedido'>
            <Cabecalho />
            <section className='primeira-secao-pedido'>
                <div className="primeira-secao-pedido-container">
                    <div className="pedido-formulario">
                        <h1>Monte seu Açaí</h1>

                        <IngredienteSection
                            title="Frutas"
                            items={frutas}
                            onAdd={(index) => handleAdd(index, setFrutas, frutas)}
                            onRemove={(index) => handleRemove(index, setFrutas, frutas)}
                        />

                        <IngredienteSection
                            title="Caldas"
                            items={caldas}
                            onAdd={(index) => handleAdd(index, setCaldas, caldas)}
                            onRemove={(index) => handleRemove(index, setCaldas, caldas)}
                        />

                        <div className='resumo-pedido'>
                            <h2>Resumo do Pedido</h2>
                            <p>Frutas: {frutas.filter(item => item.quantity > 0).map(item => `${item.name} (${item.quantity})`).join(', ')}</p>
                            <p>Caldas: {caldas.filter(item => item.quantity > 0).map(item => `${item.name} (${item.quantity})`).join(', ')}</p>
                            <p>Total: R$ {calcularTotal().toFixed(2)}</p>
                        </div>

                        <button className='botao-acoes'>Finalizar Pedido</button>
                        <button className='botao-acoes'>Voltar</button>
                    </div>
                </div>
            </section>
        </div>
    );
}