const box1 = [5, 7, 0, 0, 8, 6, 0, 9, 2];
const box2 = [1, 8, 0, 0, 0, 0, 6, 7, 0];
const box3 = [0, 0, 3, 4, 0, 2, 8, 0, 0];
const box4 = [0, 1, 0, 4, 2, 0, 0, 0, 7];
const box5 = [8, 6, 3, 0, 1, 0, 0, 2, 0];
const box6 = [0, 4, 7, 0, 0, 0, 1, 9, 0];
const box7 = [7, 0, 3, 0, 0, 0, 8, 5, 0];
const box8 = [2, 9, 8, 5, 0, 0, 7, 0, 6];
const box9 = [5, 1, 6, 0, 8, 4, 0, 0, 9];

const generateCell = (value) => {
    if (value === 0){
        return{
            value: null,
            prefilled: false,
            notes: []
        }
    }

    return {
        value,
        prefilled: true,
        notes: []
    }
};

export const board = [
    box1.map(x => generateCell(x)),
    box2.map(x => generateCell(x)),
    box3.map(x => generateCell(x)),
    box4.map(x => generateCell(x)),
    box5.map(x => generateCell(x)),
    box6.map(x => generateCell(x)),
    box7.map(x => generateCell(x)),
    box8.map(x => generateCell(x)),
    box9.map(x => generateCell(x)),
];



