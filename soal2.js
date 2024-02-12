function sortLetters(words) {
    const letterCount = new Map();
    for (const word of words) {
        for (const char of word) {
            letterCount.set(char, (letterCount.get(char) || 0) + 1);
        }
    }
    const letterCountArray = Array.from(letterCount.entries());
    letterCountArray.sort((a, b) => {
        if (b[1] === a[1]) { 
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1]; 
    });
    let result = '';
    for (const [char] of letterCountArray) {
        result += char;
    }
    return result;
}

const input1 = ["Abc", "bCd"];
console.log(sortLetters(input1)); 

const input2 = ["Oke", "One"];
console.log(sortLetters(input2)); 

const input3 = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];
console.log(sortLetters(input3));


