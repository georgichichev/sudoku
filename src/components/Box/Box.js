import styles from './Box.module.css';
import Cell from "../Cell/Cell.js";

const Box = ({box, boxIndex}) => {
    return(
        <section className={styles["box"]}>
            {box.map((x, index) => <Cell boxIndex={boxIndex} cellIndex={index} cell={x} key={index}/>)}
        </section>
    )
}

export default Box