import Cabecalho from "componentes/cabecalho/Cabecalho" //aqui está sendo feito o import absoluto a partir da pasta src devido ao arquivo jsconfig.json
import Galeria from "componentes/galeria/Galeria"
import Menu from "componentes/menu/Menu"
import Populares from "componentes/populares/Populares"
import banner from "./banner.png"
import styles from "./paginaInicial.module.scss"

const PaginaInicial = () => {
    return(
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="Imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
        </>
    )
}
export default PaginaInicial