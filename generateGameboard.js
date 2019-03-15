function generateGameboard(lengthRow, lengthColumn){
    if(lengthRow < 0 || lengthColumn < 0){
        throw new Error("Invalid parameters");
    }

    const tabRow = new Array(lengthRow);
    const tabColumn = new Array(lengthColumn);

    for( let line = 0; line < tabRow.length; line++){
        tabRow[line] = tabColumn;
        for( let column = 0; column < tabColumn.length; column++){
            tabColumn[column] = "";
        }
    }

    return tabRow;
}
module.exports = generateGameboard;
