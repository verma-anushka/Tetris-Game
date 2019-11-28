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
        this.fill(this.color);
    }

    unDraw(){ // to move tertromnino, remove the original tetromino 
        this.fill(emptyCellColor);
    }


    // Methods to move tetromino on the game board
    
    moveDown(){ // drop tetromino

        // for moving in the downward direction, x position remains the same and y position increments by 1
        if( !this.collision(0, 1, this.activeTetromino) ){ // if no tetromino is present below the active tetromino

            this.unDraw(); // remove the current tetromino
            this.y++; // set new position
            this.draw(); // draw the tetromino at new position

        }else{ // if a tetromino is present below the active tetromino

            this.fix(); // fix the active tetromino in it current position
            tetrominoObj = randomTetromino(); // drop next tetromino

        }
    }

    moveRight(){ // move right

        // for moving in the right direction, x position increments by 1 and y position remains the same 
        if( !this.collision(1, 0, this.activeTetromino) ){ // check if a tetromino or the game board is present on the RHS
            this.unDraw(); // remove the current tetromino
            this.x++; // set new position
            this.draw(); // draw the tetromino at new position
        }
    }

    moveLeft(){ // move left

        // for moving in the left direction, x position decrements by 1 and y position remains the same
        if(!this.collision(-1, 0, this.activeTetromino)){ // check if a tetromino or the game board is present on the LHS
            this.unDraw(); // remove the current tetromino
            this.x--; // set new position
            this.draw(); // draw the tetromino at new position
        }
    }

    rotate(){ // rotation

        let nextPattern = this.tetromino[ (this.idx + 1) % this.tetromino.length ]; // nect pattern of the current tertromino
        let kick = 0;
        
        if(this.collision(0, 0, nextPattern)){

            // Obstructions
            if(this.x > totalCols/2){
                // it's the right wall
                kick = -1; // we need to move the piece to the left
            }else{
                // it's the left wall
                kick = 1; // we need to move the piece to the right
            }
        }
        
        if(!this.collision(kick,0,nextPattern)){
            this.unDraw();
            this.x += kick;
            this.idx = (this.idx + 1) % this.tetromino.length; // update active tetromino idx
            this.activeTetromino = this.tetromino[this.idx]; // update active tetromino pattern
            this.draw();
        }
    }

    // Helper methods

    collision(x, y, tetromino){ // check for collisions

        for(var r = 0; r < tetromino.length; r++){
            for(var c = 0; c < tetromino.length; c++){
                
                if( !tetromino[r][c] ){ // empty cell -> no collision possible -> no checks required
                    continue;
                }

                // new postition of the tetromino
                let newX = this.x + c + x;
                let newY = this.y + r + y;
                if(newX < 0 || newX >= totalCols || newY >= totalRows){ // check for collision in the horizontal direction
                    return true;
                }
                if(newY < 0){ // check for collision in the vertical direction
                    continue;
                }
                if( board[newY][newX] != emptyCellColor){ // check for fixed tetromino at new position
                    return true;
                }

            }
        }
        return false;
    }

    fix(){ // fix a tetromino in its position

        for(var r = 0; r < this.activeTetromino.length; r++){
            for(var c = 0; c < this.activeTetromino.length; c++){
                
                if( !this.activeTetromino[r][c]){ // skip empty cells
                    continue;
                }
                
                if(this.y + r < 0){ // check for game over
                    alert("Game Over");
                    gameOver = true; // stop request animation frame
                    break;
                }
                
                board[this.y + r][this.x + c] = this.color; // fix the tetromino in place
            }
        }
        
        for(r = 0; r < totalRows; r++){ // check complete rows

            let isRowFull = true;
            for( c = 0; c < totalCols; c++){ // find a complete row
                isRowFull = isRowFull && (board[r][c] != emptyCellColor);
            }
            if(isRowFull){
                for(var y = r; y > 1; y--){ // remove the complete row
                    for(var c = 0; c < totalCols; c++){
                        board[y][c] = board[y-1][c];
                    }
                }
                for( c = 0; c < totalCols; c++){ // create the top row of the game board
                    board[0][c] = emptyCellColor;
                }
                score += 10;
                level++;
                speed *= 0.9;
            }
        }
        drawBoard();   
        scoreElement.innerHTML = score;
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


// Function to drop tetromino after every 1 sec
function drop(){ 
    let now = Date.now();
    let delta = now - dropStart;
    console.log(speed);
    if(delta > speed){
        tetrominoObj.moveDown();
        dropStart = Date.now();
    }
    if( !gameOver ){
        requestAnimationFrame(drop);
    }
}

// Function to start game
function startGame(){
    drawBoard();
    tetrominoObj.draw();
    drop();
}


// EVENT LISTENERS

// Directions
document.addEventListener("keydown",function(e){

    if(e.keyCode == 37){ // left
        tetrominoObj.moveLeft();
    }else if(e.keyCode == 38){ // up
        tetrominoObj.rotate();
    }else if(e.keyCode == 39){ // right
        tetrominoObj.moveRight();
    }else if(e.keyCode == 40){ // down
        tetrominoObj.moveDown();
    }
});

// Start Game
document.getElementById("start").addEventListener("click", function(){
    startGame();
    
});