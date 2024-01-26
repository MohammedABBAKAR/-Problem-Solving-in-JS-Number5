// The Ones' Complement of a binary number is the number 
// obtained by swapping all the 0s for 1s and all the 1s for 0s.

// For any given binary number,formatted 
// as a string, return the Ones' Complement of that number.

// Examples
// "0"    -> "1"
// "1"    -> "0"
// "000"  -> "111"
// "1001" -> "0110"
// "1001" -> "0110"


function onesComplement(binaryString) {
    let complement = '';

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            complement += '1';
        } else if (binaryString[i] === '1') {
            complement += '0';
        }
        // If the character is neither '0' nor '1', you may handle it according to your requirements.
    }

    return complement;
}

// Examples:
console.log(onesComplement("0"));      // Outputs "1"
console.log(onesComplement("1"));      // Outputs "0"
console.log(onesComplement("000"));    // Outputs "111"
console.log(onesComplement("1001"));   // Outputs "0110"
