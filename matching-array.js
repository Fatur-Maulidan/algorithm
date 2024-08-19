// INPUT = ['xc', 'dz', 'bbb', 'dz']  
// QUERY = ['bbb', 'ac', 'dz']  

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

function matchingArray(input, query) {

    let result = [];

    for (let i = 0; i < query.length; i++) {
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (query[i] === input[j]) {
                count++;
            }
        }
        result.push(count);
    }

    return result;
}

function main() {
    let result = matchingArray(INPUT, QUERY);
    let description = '';
    for (let i = 0; i < QUERY.length; i++) {
        if(result[i] === 0) {
            description += `Kata '${QUERY[i]}' tidak terdapat pada INPUT, `;
            continue;
        } else if(i === QUERY.length - 1) {
            description += `dan Kata '${QUERY[i]}' terdapat ${result[i]} pada INPUT`;
            continue;
        }
        description += `Kata '${QUERY[i]}' terdapat ${result[i]} pada INPUT, `;
    }
    return '['+result+'] ' + description;
}

console.log(main());