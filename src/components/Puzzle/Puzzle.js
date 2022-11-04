import styles from './Puzzle.module.css';
import Box from "../Box/Box.js";
import {useContext} from "react";
import {PuzzleContext} from "../../contexts/puzzleContext.js";

const Puzzle = () => {
    const {puzzle} = useContext(PuzzleContext);

    return(
        <div className={styles['puzzle']}>
            {puzzle.map((x, index) => <Box boxIndex={index} box={x} key={index}/>)}
        </div>
    )
}

export default Puzzle