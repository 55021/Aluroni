import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

const Prato = () => {
    const { id } = useParams();
    const prato = cardapio.find(prato => prato.id === Number(id));
    const navigate = useNavigate();

    if (!prato) {
        return <NotFound/>;
    } // Poderia usar o Navigate do rrd, mas não é o intuito mover para um ENDEREÇO not found, mas mostrar o componente not found demonstrando que o endereço inserido não possui conteúdo.

    return (
        <PaginaPadrao>
            <button
                className={styles.voltar}
                onClick={() => navigate(-1)}
            >
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.category.label} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>
                </div>
                <TagsPrato {...prato}/>
            </section>
        </PaginaPadrao>
    );
};

export default Prato;