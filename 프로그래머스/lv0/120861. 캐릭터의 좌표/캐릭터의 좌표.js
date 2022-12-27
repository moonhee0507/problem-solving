function solution(keyinput, board) {    
    let [x, y] = [0, 0];
    const [xLimit, yLimit] = [Math.trunc(board[0] / 2), Math.trunc(board[1] / 2)];
    
    keyinput.map((dir) => {
        if (dir === 'left' || dir === 'right') {
            dir === 'left' ? --x : ++x;
            x < 0 ? x = Math.max(x, -xLimit) : x = Math.min(x, xLimit);
        }
        
        if (dir === 'up' || dir === 'down') {
            dir === 'up' ? ++y : --y;
            y < 0 ? y = Math.max(y, -yLimit) : y = Math.min(y, yLimit);
        }
    })
    
    return [x, y];
}
