// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

// diagonal pertama = 1 + 5 + 9 = 15 
// diagonal kedua = 0 + 5 + 7 = 12 

// maka hasilnya adalah 15 - 12 = 3

let matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

function diagonalMatrixArithmatics(matrix) {
    let diagonal1 = [];
    let diagonal2 = [];
    for (let i = 0; i < matrix.length; i++) {
        diagonal1[i] = matrix[i][i];
        diagonal2[i] = matrix[i][matrix.length - 1 - i];
    }

    return {diagonal1, diagonal2};
}

function sum(array) {
    return array.reduce((a,b) => a + b, 0);
}

function separateDiagonalArrayIntoDescription(diagonal) {
    let description = '';
    
    for (let i = 0; i < diagonal.length; i++) {
        if (i === diagonal.length - 1) {
            description += diagonal[i];
            continue;
        }
        description += diagonal[i] + ' + ';
    }
    return description + ' = ' + sum(diagonal);
}

function main() {
    let {diagonal1, diagonal2} = diagonalMatrixArithmatics(matrix);

    let descriptionDiagonal1 = 'Diagonal Pertama = ' + separateDiagonalArrayIntoDescription(diagonal1);
    let descriptionDiagonal2 = 'Diagonal Kedua = ' + separateDiagonalArrayIntoDescription(diagonal2);

    let result = `Maka hasilnya adalah ${sum(diagonal1)} + ${sum(diagonal1)} = ` + Math.abs(sum(diagonal1) - sum(diagonal2));

    return {descriptionDiagonal1, descriptionDiagonal2, result}
}

let {descriptionDiagonal1, descriptionDiagonal2, result} = main();
console.log(`${descriptionDiagonal1}
${descriptionDiagonal2}

${result}`
);