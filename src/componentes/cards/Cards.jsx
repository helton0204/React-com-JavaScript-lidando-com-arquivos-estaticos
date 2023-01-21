import Card from '../card/Card';


const Cards = ({itens, styles}) => {
    return(
        <ul className={styles.galeria__cards}>
            {itens.map(item => {
                return(
                    <Card item={item} styles={styles}/>
                )
            })}
        </ul>
    )
}
export default Cards;