import styles from "./Cell.module.css";
import {useContext} from "react";
import {PuzzleContext} from "../../contexts/puzzleContext.js";

const Cell = ({cell, cellIndex, boxIndex}) => {
    const {onCellClick} = useContext(PuzzleContext);

    return(
        <div
            className={!cell.prefilled ? styles["cell"] : `${styles["cell"]} ${styles["prefilled"]}`}
            onClick={(e) => {
                if (cell.prefilled){
                    return null
                }
                return onCellClick(e, boxIndex, cellIndex)
            }}
        >
            <p>{cell.value}</p>
            <p className={styles['notesList']}>{cell.notes.join(' ')}</p>
        </div>
    )
}

export default Cell