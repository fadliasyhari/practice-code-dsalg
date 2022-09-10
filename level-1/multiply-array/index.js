const multiplyArray = (val) => {
    // please write your solution here. Good luck
    let result = 1;
    for(let v of val) {
        result = result * v
    }
    result = result.toString()
    return result;
}

const testCaseCheckValue = (value = Array(), testValue, expectedResult) => {
    return console.log(testValue == expectedResult 
        ? `Test case 1: Success! multiply ${value} is equivalent with ${expectedResult}` 
        : `Test case 1: Failed! Expected ${expectedResult} but got ${testValue}`);
}

const testCaseOutputMustBeString = (value = Array(), testValue, expectedResult = String) => {
    return console.log(testValue === expectedResult 
        ? `Test Case 2: Success! multiply ${value} result type must be a string` 
        : `Test Case 2: Failed! Expected output type is string but got ${typeof(testValue)}`);
}

// Test case 1
testCaseCheckValue([1,2,3], multiplyArray([1,2,3]), '6');
testCaseCheckValue([4,8,2,9,10], multiplyArray([4,8,2,9,10]), '5760');
testCaseCheckValue([15,210,32], multiplyArray([15,210,32]), '100800');
// Test case 2
testCaseOutputMustBeString([1,2,3], multiplyArray([1,2,3]), '6');
testCaseOutputMustBeString([4,8,2,9,10], multiplyArray([4,8,2,9, 10]),'5760');
testCaseOutputMustBeString([15,210,32], multiplyArray([15,210,32]), '100800');