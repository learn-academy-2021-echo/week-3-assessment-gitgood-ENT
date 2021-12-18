// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
        // expect when passing in the nubmer 6 to get an array with 6 values all of them being fibonacci values, and the same with 10 returning ten values in an array
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
// RED

// b) Create the function that makes the test pass.

// Declare variable fibonacci that takes a number as an argument and returns an array of fibonacci numbers of length equal to the argument
const fibonacci = (num) => {
    //Place a conditional that determines if the input is greater than two and returns a message if it isn't
    if (num < 2){
        return "Try a bigger number!"
    }
    // Declare a local variable to add to the end of the array, that starts = 1 and then gets added to itself as the values go up using a for loop
    // Also declaring the return array with the first value in it since that is simpler than pushing the last number onto the array. I am starting at the second number of the fibonacci sequence since the return is going to be based on an argument that is 2 or greater.
    var fibonacciNums = [1]
    let currentNumber = 1
    // Adding another variable to store the value of the previous number in the sequence
    let lastNumber = 1
    // The for loop will take in the argument and return an array by pushing the currentNumber onto the array and then adding to it index will start at one since there is already one item in the returned array
        for (let index = 1; index < num; index++) {
            fibonacciNums.push(currentNumber)
            // Add currentNumber to the previous number to get the new current number
            currentNumber = currentNumber + lastNumber
            // Then reassign last number to be the previous number, which is the new current number minus the current value of the previous number
            lastNumber = currentNumber - lastNumber
        }
    return fibonacciNums
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("sortOdds", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        // Expect when we pass in an array to get out an array of odd numbers sorted from least to greatest
        expect(sortOdds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortOdds(fullArr2)).toEqual([-823, 7, 23])
    })
})

// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
