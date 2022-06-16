import React from 'react';
import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/img/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

const Inicio = () => {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

    const navigate = useNavigate();

    function redirecionarParaDetalhes(prato: Prato) {
        navigate(`/prato/${prato.id}`, { state: { prato }}); // Além do endereço e do state, o useNavigate aceita mais um parâmetro, o replace. O replace aceita um valor booleano que determina se a página de onde saímos vai ser "apagada" da pilha, e quando voltamos no histórico, somos direcionados ao que veio antes dela. Substitui a última rota do histórico pela rota passada como primeiro parâmetro para a função. Ex.: Se você está em uma página e vai para uma de login, e dali é levado para outra, se pedir para retornar uma página, será levado ao conteúdo de antes do login.
    }

    return (
        <section>
            <h3 className={stylesTema.titulo}>
            Recomendações da cozinha</h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title}/>
                        </div>
                        <button
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(item)}
                        >
                            Ver mais
                        </button>
                    </div>))}
            </div>
            <h3 className={stylesTema.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt='Casa do Aluroni'/>
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, 3185 <br/> <br/> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
};

export default Inicio;