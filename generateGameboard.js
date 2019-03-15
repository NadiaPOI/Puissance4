function generateGameboard(lengthRow, lengthColumn){

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
generateGameboard(6,7);
module.exports = generateGameboard;
