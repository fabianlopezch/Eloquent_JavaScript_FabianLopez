/* This script presents a solution to the exercise "Bean Counting" 
*  in Chapter 3 of Eloquent JavaScript by Haverbeke.
*/

function countBs(str)
{
    let counter = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] == "B") counter += 1;
    }

    return counter;
}

console.log(countBs("BBC"));

function countChar(myStr, myChar)
{
    let counter = 0;
    for (let i = 0; i < myStr.length; i++)
    {
        if (myStr[i] == myChar) counter += 1;
    }

    return counter;
}

console.log(countChar("kakkerlak", "k"));

function countLetter(letter)
{
    const x = function (myStr)
    {
        let counter = 0;
        for (let i = 0; i < myStr.length; i++)
        {
            if (myStr[i] == letter) counter += 1;
        }
        return counter;
    }

    return x;
}

const countA = countLetter("a");

console.log(countA("Aguacate"));