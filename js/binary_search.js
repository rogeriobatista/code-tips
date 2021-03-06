// How to implement Binary Search in a Ordered Integer Array using Javascript

// Search with Javascript Find Function
const search = (array, target) => array.find(element => element === target) || -1

// Search with Binary Chop (Binary Search)
const binarySearch = (array, target) => {
    let leftPointer = 0
    let rightPointer = array.length - 1
    let middlePoint = getMiddlePoint(leftPointer, rightPointer)

    while(array.length > middlePoint) {

        console.log("Loop!")

        const middleElement = array[middlePoint]

        if (middleElement == target) return middleElement

        if (target < middleElement) rightPointer = middlePoint - 1

        if (target > middleElement) leftPointer = middlePoint + 1

        if (leftPointer > rightPointer) return -1

        middlePoint = getMiddlePoint(leftPointer, rightPointer)
    }
}

const getMiddlePoint = (leftPointer, rightPointer) => Math.floor((leftPointer + rightPointer) / 2)

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(search(array, 10))
console.log(binarySearch(array, 14))
