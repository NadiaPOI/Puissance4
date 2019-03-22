const gameboard = require("./generateGameboard");

function addPawn(gameboard,column){

    let lastRow = gameboard.length - 1;

    if(!gameboard[0].includes("")){
        throw new Error("The gameboard is full");
    }

    if(gameboard[0][column] === "Y"){
        throw new Error("The column is full");
    }

    while(gameboard[lastRow][column] === "Y" && lastRow > 0){
            lastRow--;
    }
    gameboard[lastRow][column] = "Y";
    
    console.log(gameboard);
    return gameboard;
    
}

module.exports = addPawn;