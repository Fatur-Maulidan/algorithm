// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseLetters(word) {
    return word.split('').reverse().join('');
}

function separateLettersAndNumbers(word) {
    let letters = '';
    let numbers = '';

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        
        if (!isNaN(char) && char !== ' ') {
            numbers += char;
        } else {
            letters += char;
        }
    }

    return { letters, numbers };
}

function main() {
    let word = "NEGIE1"
    let {letters, numbers} = separateLettersAndNumbers(word);
    let result = reverseLetters(letters);
    
    return result + numbers
}

console.log(main())