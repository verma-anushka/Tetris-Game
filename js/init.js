// Select HTML elements
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");

// Game variables
const totalRows = 20; // total number of rows
const totalCols = 10; // total number of columns
const cellSize = 30; // size of a single cell
const emptyCellColor = "#000"; // color of an empty cell
let score = 0; // score
let speed = 1000;
let level = 0;
let gameOver = false; // check for game over
let dropStart = Date.now(); // timer for tetromino

// Initialize the game board
let board = [];

for(var r = 0; r < totalRows; r++){

    board[r] = []; // assign  empty array to each row
    for(var c = 0; c < totalCols; c++){
        board[r][c] = emptyCellColor; // fill each row with an empty cell
    }
}

// Function to draw an empty cell 
function drawCell(x,y,color){

    // cell- color and dimensions
    ctx.fillStyle = color;
    ctx.fillRect(x*cellSize, y*cellSize, cellSize, cellSize);

    // cell- border
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.strokeRect(x*cellSize, y*cellSize, cellSize, cellSize);
}

// Function to draw the game board
function drawBoard(){
    for(var r = 0; r < totalRows; r++){
        for(var c = 0; c < totalCols; c++){
            drawCell(c, r, board[r][c]); // draw cell 
        }
    }
}

