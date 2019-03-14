
function gameboard(row, column){
    row = ["", "", "", "", "", ""];
    column = ["", "", "", "", "", "", ""];
    for( let line = 0; line < row.length; line++){
        row[line] = column;
    }
    return row;
}
module.exports = gameboard;
