import './App.css';
import Puzzle from "./components/Puzzle/Puzzle.js";
import NumberInput from "./components/NumberInput/NumberInput.js";
import {PuzzleAuth} from "./contexts/puzzleContext.js";
import ConflictMessage from "./components/ConflictMessage/ConflictMessage.js";

function App() {
    return (
        <div className="container">
            <PuzzleAuth>
                <Puzzle/>
                <NumberInput/>
                {/*<ConflictMessage/>*/}
            </PuzzleAuth>
        </div>
    );
}

export default App;
