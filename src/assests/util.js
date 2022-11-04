export const rowGenerator = (puzzle, boxIndex, cellIndex) =>{
    const row = [];

    if (boxIndex < 3 && cellIndex < 3){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 3 && cellIndex < 6){
        for (let i = 0; i < 3; i++) {
            for (let j = 3; j < 6; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 3 && cellIndex < 9){
        for (let i = 0; i < 3; i++) {
            for (let j = 6; j < 9; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 6 && cellIndex < 3){
        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 3; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 6 && cellIndex < 6){
        for (let i = 3; i < 6; i++) {
            for (let j = 3; j < 6; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 6 && cellIndex < 9){
        for (let i = 3; i < 6; i++) {
            for (let j = 6; j < 9; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 9 && cellIndex < 3){
        for (let i = 6; i < 9; i++) {
            for (let j = 0; j < 3; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 9 && cellIndex < 6){
        for (let i = 6; i < 9; i++) {
            for (let j = 3; j < 6; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }
    else if(boxIndex < 9 && cellIndex < 9){
        for (let i = 6; i < 9; i++) {
            for (let j = 6; j < 9; j++) {
                row.push(puzzle[i][j].value);
            }
        }
    }

    return row
};

export const columnGenerator = (puzzle, boxIndex, cellIndex) =>{
    const column = [];
    if (boxIndex === 0 || boxIndex === 3 || boxIndex === 6){
        if (cellIndex === 0 || cellIndex === 3 || cellIndex === 6){
            for (let i = 0; i <= 6; i+= 3) {
                for (let j = 0; j <= 6; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
        else if (cellIndex === 1 || cellIndex === 4 || cellIndex === 7){
            for (let i = 0; i <= 6; i+= 3) {
                for (let j = 1; j <= 7; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
        else if (cellIndex === 2 || cellIndex === 5 || cellIndex === 8){
            for (let i = 0; i <= 6; i+= 3) {
                for (let j = 2; j <= 8; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
    }
    else if (boxIndex === 1 || boxIndex === 4 || boxIndex === 7){
        if (cellIndex === 0 || cellIndex === 3 || cellIndex === 6){
            for (let i = 1; i <= 7; i+= 3) {
                for (let j = 0; j <= 6; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
        else if (cellIndex === 1 || cellIndex === 4 || cellIndex === 7){
            for (let i = 1; i <= 7; i+= 3) {
                for (let j = 1; j <= 7; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
        else if (cellIndex === 2 || cellIndex === 5 || cellIndex === 8){
            for (let i = 1; i <= 7; i+= 3) {
                for (let j = 2; j <= 8; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
    }
    else if (boxIndex === 2 || boxIndex === 5 || boxIndex === 8){
        if (cellIndex === 0 || cellIndex === 3 || cellIndex === 6){
            for (let i = 2; i <= 8; i+= 3) {
                for (let j = 0; j <= 6; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
        else if (cellIndex === 1 || cellIndex === 4 || cellIndex === 7){
            for (let i = 2; i <= 8; i+= 3) {
                for (let j = 1; j <= 7; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
        else if (cellIndex === 2 || cellIndex === 5 || cellIndex === 8){
            for (let i = 2; i <= 8; i+= 3) {
                for (let j = 2; j <= 8; j+= 3) {
                    column.push(puzzle[i][j].value);
                }
            }
        }
    }

    return column
}