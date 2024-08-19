// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence) 
// // mengerjakan: 11 character

const sentence = "Saya sangat senang mengerjakan soal algoritma";

function separateWord(sentence) {
    return sentence.split(" ");
}

function countLetters(word) {
    return word.length;
}

function checkIndex(word) {
    let index = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[index] > word[i + 1]) {
            index = index;
        } else if(word[index] < word[i + 1] && word[i + 1] !== undefined) {
            index = i+1;
        }
    }
    return index;
}

function main() {
    let numberOfWords = separateWord(sentence).length;
    let lengthWord = []

    for (let i = 0; i < numberOfWords; i++) {
        lengthWord[i] = countLetters(separateWord(sentence)[i]);
    }

    return separateWord(sentence)[checkIndex(lengthWord)] + ' : ' + lengthWord[checkIndex(lengthWord)] + " character";
}

console.log(main());