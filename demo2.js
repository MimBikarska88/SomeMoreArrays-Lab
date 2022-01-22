function printArrayWithAGivenDelimeter(arr, delim) {
    console.log(arr.join(delim));
}
/*
Input :
['One',
'two',
'three',
'four',
'five']

'-'


*/
function printEveryArrayElement(arr, step) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += step) {
        console.log(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}
/*
Input :
['5','20','31','4','20']
step : 2

Output:
['5', '31','20']
*/

function addAndRemoveElements(commands) {
    let number = 1;
    let arr = [];
    commands.forEach(element => {
        if (element == 'add') {
            arr.push(number);
        } else if (element == 'remove') {
            arr.pop();
        }
        number++;
    });
    if (arr.length == 0) {
        console.log('empty');
    } else {
        console.log(arr.join('\n'));
    }
}
/*
Input:
['add' ,'add','remove','add' ];


Output:
1
4
5

*/
function rotateArray(arr, rotations) {
    for (let i = 0; i < rotations; ++i) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
/*
Input :

['Banana','Orange','Coconut','Apple'] , 15

Output:
Orange Coconut Apple Banana
*/
function extractIncreasingSubsetOfAnArray(arr) {
    let newArr = [];
    let biggestElement = arr[0];
    newArr.push(biggestElement);

    arr.forEach((element) => {
        if (element > biggestElement) {
            newArr.push(element);
            biggestElement = element;
        }
    })
    console.log(newArr);

}
/* Input : 

extractIncreasingSubsetOfAnArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);

Output:
 


[1, 3, 8, 10, 12, 24]
*/

function listOfNames(arr) {
    let i = 0;
    arr.sort((a, b) => a.localeCompare(b)).forEach(function(element) {
        console.log(++i + "." + element.toString());
    });
}


/*
Input : 

listOfNames(["John", "Bob", "Christina", "Ema"]);


Output :
1.Bob
2.Christina
3.Ema
4.John


*/
function sortingNumbers(numbers) {
    let numbersNew = [];
    let i = numbers.length - 1;

    // numbers  => returns the sorted array in ascending order
    // reduce  => returns a new array on each iteration that takes two elements
    // starting with the smallest ones ( with the smallest index), and with the largest ones 
    // with the biggest  index  ( elem ) -> smallest index
    // oldarr[i--] = the opposite end of the array( the largest elements are in the end)
    numbersNew = numbers.sort((a, b) => a - b).
    reduce((arr, elem, index, oldarr) => {
        arr.push(elem);
        arr.push(oldarr[i--]);
        return arr;
    }, []).
    slice(0, numbers.length);

    return numbersNew;
}
/*
Input : 
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]

Output : 
[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

*/
function sortArrayByTwoCriteria(arr) {
    return arr.sort((a, b) =>
        (a.length - b.length) || (a.localeCompare(b))
    );
}

console.log(sortArrayByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]))