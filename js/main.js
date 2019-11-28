// Tetromino Class
class Tetromino{

    // Tetromino Class Constructor
    constructor(tetromino, color){

        this.tetromino = tetromino; // tetromino piece
        this.color = color; // tetromino color
        this.idx = 0; // tetromino pattern (initial selected pattern)
        this.activeTetromino = this.tetromino[this.idx]; // active tetromino pattern (on screen)
        this.x = 3; // initial position of the tetromino (above the game board)
        this.y = -2; // initial position of the tetromino (above the game board)

    }
    

    // Methods to draw tetromino on the game board

    fill(color){
        for(var r = 0; r < this.activeTetromino.length; r++){
            for(var c = 0; c < this.activeTetromino.length; c++){

                if( this.activeTetromino[r][c] ){ // only draw the cells occupied by a tetromino
                    drawCell(this.x + c, this.y + r, color);
                }
            }
        }
    }

    draw(){ // draw tetromino 
        console.log("aaya");
        this.fill(this.color);
    }

    unDraw(){ // to move tertromnino, remove the original tetromino 
        this.fill(emptyCellColor);
    }


}


// Instantiate Tetromino Object

// Generate random tetrominoes
function randomTetromino(){
    
    let r =  Math.floor( Math.random() * tetrominoPieces.length ); // generate a random number between 0 and 6
    return new Tetromino( tetrominoPieces[r][0], tetrominoPieces[r][1]); // return obj of class Tetromino
}

// Object of Tetromino Class
let tetrominoObj = randomTetromino();


// Function to start game
function startGame(){
    drawBoard();
    tetrominoObj.draw();

}


// EVENT LISTENERS

// Start Game
document.getElementById("start").addEventListener("click", function(){
    startGame();
});