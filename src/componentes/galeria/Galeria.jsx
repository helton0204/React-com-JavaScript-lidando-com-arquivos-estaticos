import Tags from '../tags/Tags'
import Cards from '../cards/Cards';
import styles from './galeria.module.scss';
import fotos from './fotos.json';
import { useState } from 'react';

const Galeria = () => {

    const [listafotos, setListaFotos] = useState(fotos);
    const tags = [...new Set(fotos.map(foto => foto.tag))] //new Set(...), está criando um novo objeto "Set" a partir do array anteriormente criado. Um conjunto (Set) é uma estrutura de dados que armazena valores únicos, e isso garante que não haverá valores duplicados no conjunto. [...new Set(...)], está usando o operador de espalhamento (spread operator) para transformar o objeto "Set" em um array.

    const filtraFotos = (tag) => {
        const filtro = fotos.filter(foto => foto.tag === tag);
        setListaFotos(filtro);
    }

    return(
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setListaFotos={setListaFotos}/>
            <Cards itens={listafotos} styles={styles}/>
        </section>
    )
}
export default Galeria;