function addPawn(gameboard,column){

    const lastRow = gameboard.length -1;

        if(gameboard[lastRow][column] === ""){
            gameboard[lastRow][column] = "Y";
        } else {
            gameboard[lastRow - 1][column] = "Y";
        }

    console.log(gameboard);
    return gameboard;
}

module.exports = addPawn;