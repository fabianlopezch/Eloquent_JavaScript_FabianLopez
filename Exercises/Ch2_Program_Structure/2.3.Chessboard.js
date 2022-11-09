/* This script presents a solution to the exercise "Chessboard" 
*  in Chapter 2 of Eloquent JavaScript by Haverbeke.
*/

const size = 10;
let board = "";
let state = true;

for (let i=0; i<size*size; i++)
{
    if (i%size == 0 && i!=0) 
    {
        board += "\n";
        state = !state;
    }
    if (state == true)
    {
        board += " ";
        state = false;
    }
    else
    {
        board += "#";
        state = true;
    }
}

console.log(board);

console.log("\n\n");

// Solution from the book
board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  
  console.log(board);