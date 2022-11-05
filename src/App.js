import './App.css';
import Puzzle from "./components/Puzzle/Puzzle.js";
import NumberInput from "./components/NumberInput/NumberInput.js";
import {PuzzleAuth} from "./contexts/puzzleContext.js";

function App() {
    return (
        <div className="container">
            <PuzzleAuth>
                <Puzzle/>
                <NumberInput/>
            </PuzzleAuth>
        </div>
    );
}

export default App;
