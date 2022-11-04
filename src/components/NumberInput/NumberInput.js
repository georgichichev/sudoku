import {useContext} from "react";
import {PuzzleContext} from "../../contexts/puzzleContext.js";
import styles from "./NumberButtons.module.css";
import './switch.css'

const buttons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

const NumberInput = () => {
    const {onNumberButtonClick, onModeChange} = useContext(PuzzleContext);

    return (
        <>
            <section className={styles["numberButtons"]}>
                {buttons.map(x => {
                    return (
                        <button
                            onClick={() => onNumberButtonClick(Number(x))}
                            key={x}
                            className={styles["button"]}
                        >
                            {x}
                        </button>
                    )
                })}
                <label className="switch">
                    <input onChange={onModeChange} type="checkbox"/>
                    <span className="slider round"/>
                    <p className="candidateModeText">Candidate mode</p>
                </label>
            </section>
        </>
    )
};

export default NumberInput