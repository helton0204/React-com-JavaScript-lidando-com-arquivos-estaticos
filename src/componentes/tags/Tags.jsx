import styles from './tags.module.scss'
import fotos from 'componentes/galeria/fotos.json'

const Tags = ({tags, filtraFotos, setListaFotos}) => {

    return(
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map(tag => {
                    return <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
                })}
                <li onClick={() => setListaFotos(fotos)}>Todas</li>
            </ul>
        </div>
    )
}
export default Tags;