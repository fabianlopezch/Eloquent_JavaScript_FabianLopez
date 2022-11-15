/* This script presents a solution to the exercise "A List" 
*  in Chapter 4 of Eloquent JavaScript by Haverbeke.
*/

function arrayToList(myArray)
{
    let myList = null;
    for (let i = myArray.length - 1; i >= 0; i--)
    {
        myList = {
            value: myArray[i],
            rest: myList
        };
    }
    return myList;
}

let newList = arrayToList([1,2,3,4,5,8]);
console.log(newList);

function listToArray(myList)
{
    let myArray = [];
    for (let node = myList; node; node = node.rest)
    {
        myArray.push(node.value);
    }
    return myArray;
}

console.log(listToArray(newList));

function prepend(value, myList)
{
    return {value, rest: myList};
}

newList = prepend(60, newList);
console.log(newList);

function nth(myList, number)
{
    if (!myList) return undefined;
    else if (number == 0) return myList.value;
    else return nth(myList.rest, number - 1);
}

console.log(nth(newList, 0));