function countCharacters(input) {
    input = input.toLowerCase();

    let charCount = {};

    for (let char of input) {
        if (/^[a-zA-Z]$/.test(char)) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    let output = '';
    for (let char in charCount) {
        output += `${char}=${charCount[char]}, `;
    }

    if (output.length > 0) {
        output = output.slice(0, -2);
    }

    return output;
}

let inputA = "We Always Mekar";
let inputB = "coding is fun";
console.log("Input 1:");
console.log(countCharacters(inputA));
console.log("\nInput 2:");
console.log(countCharacters(inputB));