import { useEffect, useState } from 'react';
import cardapio from 'data/cardapio.json';
import styles from './Itens.module.scss';
import Item from './Item/index';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

const Itens = (props: Props) => {
    const { busca, filtro, ordenador } = props;
    const [lista, setLista] = useState(cardapio);

    useEffect(() => {
        function testaBusca(title: string) {
            const regex = new RegExp(busca, 'i');
            return regex.test(title);
        }
    
        function testaFiltro(id: number) {
            if (filtro !== null) return filtro === id;
        }

        function ordenar(novaLista: typeof cardapio) {
            switch (ordenador) {
            case 'porcao':
                return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'preco':
                return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return novaLista;
            }
        }

        // Não foi lista.filter pra não alterar o estado e dar ruim na próxima filtragem, e cardapio.filter sempre vai realizar a operação a partir da lista completa.
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    }, [busca, filtro, ordenador]);

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};

export default Itens;