var fs = require('fs'); // File System
// Format: “//[delimiter]\n[delimiter separated numbers]”
var textByLine = (String)(fs.readFileSync('input.txt').toString().split("\n"));
// console.log(typeof(textByLine[1]) + ': \'' + textByLine[1] + '\'')

UnitTests()
Start(textByLine)


function Start(numbers) {
    let fragmentedInput = (numbers.toString().split("\\n")) //2.)

    console.log("")
    console.log(fragmentedInput)
        // let delimiter = (fragmentedInput[0].split('')[2]) //3.)
    let delimiter = fragmentedInput[0].slice(2); //Bonus 2.)
    console.log('delimiter: ' + delimiter + '\n')

    // Remove spaces and split elements using delimiter
    let numberArray = (String)(fragmentedInput[1]).split(' ').join('').split(delimiter);


    // Run the Add() function
    console.log('\nSum: ' + Add(numberArray))
}

function Add(numbers) {
    if (!!numbers && !isEmpty(numbers)) { //1.e) A few conditional tests
        let sum = 0;

        numbers.forEach(element => {
            try {
                if (element.includes('-')) { throw "Exception: Negatives not allowed: " + (String)(element) } //4.)
                else {
                    let intElement = parseInt(element)
                    if (intElement <= 1000)
                        sum += intElement;
                    console.log('e: ' + (String)(element));
                }

            } catch (e) {
                console.error(e);
            }
        });
        return parseInt(sum) // 1.c) Will ensure the output is a 'number' - 'integers' don't exist in JS

    } else {
        return 0 // 1.b)
    }
}

function UnitTests() {
    // format: [string_of_integers, int_of_test_solution, bool_of_expected_result]
    let testArray = [
        ["1, 2, 3", 6, "True"], // Test simple addition which should return True
        ["1", 1, "True"], // Test 1 = 1 which should return True

        ["1, 2, 3", 3, "False"], // Test simple addition which should return False
        ["1", 2, "False"], // Test 1 = 2 which should return False

        ["", 0, "True"], // Test empty case = 0 : True
        ["", 1, "False"], // Test empty case = 1 : False

        ["1, 2, 1001", 3, "True"], // Test case where values larger than 1000 are ignored
        ["1, 2, 1000", 1003, "True"], // Test case where values smaller/equal to 1000 are applied
    ]

    testArray.forEach(element => {
        element = element.toString().split(' ').join('').split(',')

        let sumOfElements = Add(element.slice(0, -2)) // Apply Add() to the desired elements
        let solution = element.slice(-2, -1)[0] // Get the expected solution
        let expectedBoolean = element.slice(-1)[0] // Get the expected boolean

        let currentBoolean = ""

        sumOfElements == solution ? currentBoolean = "True" : currentBoolean = "False"

        currentBoolean == expectedBoolean ? console.log("Test Passed") : console.log("Test Failed")
    })

    console.log('\n----------Tests Complete-----------\n')
}


function isEmpty(str) {
    return (!str || 0 === str.length);
}