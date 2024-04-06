// Original arrays with duplicates
var array1 = [1, 2, 5, 8, 2, 6, 255,255,255,255];
var array2 = [1, 3, 5, 0, 1, 6, 255,255,255,255];
// Function to get remaining items in both arrays other than 255
function getRemainingItems(arr1, arr2) {
    var commonElements = arr1.filter(element => arr2.includes(element) && element !== 255);

    // Filter out 255 from both arrays
    var filteredArr1 = arr1.filter(function (element) { return element !== 255; });
    var filteredArr2 = arr2.filter(function (element) { return element !== 255; });
    // Find items in arr1 that are not in arr2
    var array1Remaining = filteredArr1.filter(function (element) { return !filteredArr2.includes(element); });
    // Find items in arr2 that are not in arr1
    var array2Remaining = filteredArr2.filter(function (element) { return !filteredArr1.includes(element); });

    // Create leftArray and rightArray
    var leftArray = [...commonElements, ...array1Remaining];
    var rightArray = [...commonElements, ...array2Remaining];
    // Get all 255 elements from original arrays
    var array1_255Elements = arr1.filter(function (element) { return element === 255; });
    var array2_255Elements = arr2.filter(function (element) { return element === 255; });

    // Add 255 elements to the end of both arrays
    leftArray.push(...array1_255Elements);
    rightArray.push(...array2_255Elements);

    return { leftArray: leftArray, rightArray: rightArray };
}
// Get remaining items in both arrays other than 255
var _a = getRemainingItems(array1, array2)
leftArray = _a.leftArray, 
rightArray = _a.rightArray;

console.log("Remaining items in array1:", leftArray); // Output: [2, 8]
console.log("Remaining items in array2:", rightArray); // Output: [3, 0]
