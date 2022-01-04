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

// RED
// b) Create the function that makes the test pass.

// Declare function sortOdds that takes in an array and filters --using .filter-- through the values returning only the odd ones, and then sorts them using .sort
// const sortOdds = (array) => {
//     // assign a variable to hold the filtered array using typeof to return numbers only
//     let numberArray = array.filter(value => typeof value === 'number')
//     // return the number array filtered again to only have odd numbers, including negatives, and then sorted using the built in function to return the lowest numbers first
//     return numberArray.filter(value => value % 2 !== 0).sort((a, b) => a - b)
// }
// Green
//Refactor idea is to filter twice in one or use && to pass in two requirements to the filter

const sortOdds = (array) => {
    return array.filter(value => typeof value === 'number' && value % 2 !== 0).sort((a, b) => a - b)
}
// Refactor returned a green, Refactor successful

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

// I totally understand the importance of pseudocode, I do however also see how the test that we use here is in itself pseudocode. i.e. ====
// ===> I describe my function that I call accumulator, 
//          it "takes in an array and returns an array  of the same length that with the accumulating sum of the numbers in it so far"
//              I expect that when I pass in an array of numbers, that the output is going toEqual this array
// I'm not trying to bash on pseudocode, I find it very useful when I am doing complex, multi step things that call multiple functions and data pieces, or am using new types of functions, syntaxes, or things that I found difficult to use when first learning them.
// Sincerely, a genuinely curious and streamline oriented student who wants to know the why of everything, including the reason why we do things that I don't understand why we do. I am sure there is a good reason, like, muscle memory and creating a solid foundation for learning.
describe("accumulator", () => {
    it("takes in an array and returns an array  of the same length that with the accumulating sum of the numbers in it so far", () => {
        expect(accumulator(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulator(numbersToAdd2)).toEqual([0, 7, -1, 11])
    })
})
// Red

// b) Create the function that makes the test pass.

//declare function accumulator that takes in an array and returns an array  of the same length that with the accumulating sum of the numbers in it so far
const accumulator = (array) => {
    // Declare a variable to store the new array, and include the first number from the input array since they will always be the same.
    let addedNumbers = [array[0]]
    // create a for loop that pushes the new sum into the output array, with index starting at 1
    for (let j = 1; j < array.length; j++) {
        // add the number at j index to the current sum of the input array numbers and push it into addedNumbers array 
        addedNumbers.push(addedNumbers[j - 1] + array[j])        
    }
    return addedNumbers
}
// Green