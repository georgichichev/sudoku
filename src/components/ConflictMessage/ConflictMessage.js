import {useContext} from "react";
import {PuzzleContext} from "../../contexts/puzzleContext.js";
import styles from './ConflictMessage.module.css';

const ConflictMessage = () =>{
    const {conflict} = useContext(PuzzleContext);

    return(
        <div className={styles["conflictMessage"]}>
            {conflict ? <p>There is a conflict!</p> : <p>No conflicts.</p>}
        </div>
    )
}

export default ConflictMessage