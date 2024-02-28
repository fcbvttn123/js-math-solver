let HTMLForm = document.querySelector("[data-form]")
let HTMLInput = HTMLForm.querySelector("input")

HTMLForm.addEventListener("submit", e => {
    e.preventDefault()
    let textBoxValue = removeSpaces(HTMLInput.value)
    let inputValueIsValid = validInputValue(textBoxValue)
    if(!inputValueIsValid) {
        return
    }
    mulDivCalculation(textBoxValue)
})

// Check if the value of text box matching only the allowed characters: 0-9, (), +, -, *, /, ^, space
// Check if the first character of text box matching only the allowed characters: 0-9, ( 
// Check if the last character of text box matching only the allowed characters: 0-9, ) 
function validInputValue(inputString) {
    // Define a regular expression pattern that matches only the allowed characters
    var pattern = /^[0-9()+\-*\/^ ]+$/;
    // Define a regular expression pattern that matches either a digit or (
    let pattern2 = /^[0-9(]$/;
    // Define a regular expression pattern that matches either a digit or )
        let pattern3 = /^[0-9)]$/;
    // Use test method to check if the input string matches the pattern
    return pattern.test(inputString) && pattern2.test(inputString[0]) && pattern3.test(inputString[inputString.length-1]);
}

// Remove all space characters from the text box value 
function removeSpaces(inputString) {
    // Define a regular expression pattern to match space characters
    var pattern = /\s/g;
    // Use replace method to remove all space characters from the input string
    var newString = inputString.replace(pattern, "");
    
    return newString;
}

function mulDivCalculation(inputString) {
    console.log(inputString)
}




// check if form value is valid 

    // 2 + 5 - 3 * 4 * 5 / 3 /  6 ^

// start calculating 

    // mul and div first 
    
        // search for * and / character

        // get the before character --> check validity 

        // get the after character --> check validity 

        // do calculation 

        // replace string 

    // search for + and - character 