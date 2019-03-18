const gameboard = require("./generateGameboard");

function addPawn(row, column){

    const tab = gameboard(6, 7);
    console.log(tab);
   
    if(tab[row][column] === ""){
        let newTabColumn = tab[row];
        console.log(newTabColumn);
        newTabColumn[column] = "Y";
        tab[row] = newTabColumn;
    }  
    console.log(tab);
    return tab;
}

module.exports = addPawn;