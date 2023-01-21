import logo from './logo.png'
import search from './search.png'
import styles from './cabecalho.module.scss'

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Alura Space"/>
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura?" className={styles.cabecalho__input}/>
                <img src={search} alt="ícone de lupa"/>
            </div>
        </header>
    )
}
export default Cabecalho;