import {createContext, useState} from "react";
import {board} from "../assests/board.js";
import {rowGenerator, columnGenerator} from "../assests/util.js";

export const PuzzleContext = createContext();

export const PuzzleAuth = ({children}) =>{
    const [puzzle, setPuzzle] = useState(board);
    const [selectedCell, setSelectedCell] = useState({boxIndex: null, cellIndex: null});
    const [conflict, setConflict] = useState(false);
    const [candidateMode, setCandidateMode] = useState(false);

    const onCellClick = (e, boxIndex, cellIndex) =>{
        setSelectedCell({boxIndex, cellIndex});
    };

    const onModeChange = () =>{
        setCandidateMode(!candidateMode);
    };

    const onNumberButtonClick = (numberInput) =>{
        if (selectedCell.boxIndex === null){
            return
        }

        if (candidateMode){
            const newBox = puzzle[selectedCell.boxIndex];

            newBox[selectedCell.cellIndex].notes.push(numberInput);

            setPuzzle([...puzzle, newBox]);

            return;
        }

        if (puzzle[selectedCell.boxIndex].filter(x => x.value == numberInput).length > 0){
            setConflict(true);
        }
        else if(rowGenerator(puzzle, selectedCell.boxIndex, selectedCell.cellIndex).includes(Number(numberInput))){
            setConflict(true);
        }
        else if(columnGenerator(puzzle, selectedCell.boxIndex, selectedCell.cellIndex).includes(Number(numberInput))){
            setConflict(true);
        }
        else {
            setConflict(false);
        }

        const newBox = puzzle[selectedCell.boxIndex];

        newBox[selectedCell.cellIndex] = {value: Number(numberInput), prefilled: false, notes: []};


        setPuzzle([...puzzle, newBox]);
    };

    return(
        <PuzzleContext.Provider
            value={{
                puzzle,
                conflict,
                candidateMode,
                onModeChange,
                onCellClick,
                onNumberButtonClick,
            }}
        >
            {children}
        </PuzzleContext.Provider>
    )
}