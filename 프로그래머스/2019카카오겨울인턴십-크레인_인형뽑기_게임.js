function solution(board, moves) {
    let stack = [];    
    let rowToColumn = board.reduce((acc, cur) => cur.map((el, i) => [...(acc[i] || []), el]), []);
    let count = 0;
    
    for (let i of moves) {
        let j = rowToColumn[i-1].lastIndexOf(0) + 1;
        if (rowToColumn[i-1][j] !== 0 && rowToColumn[i-1][j] != undefined) {
            if (stack[stack.length-1] == rowToColumn[i-1][j]) {
                stack.pop();
                rowToColumn[i-1][j] = 0;
                count += 2;
                continue;
            }
            stack.push(rowToColumn[i-1][j]);
            rowToColumn[i-1][j] = 0;
        }        
    }
    return count;
}