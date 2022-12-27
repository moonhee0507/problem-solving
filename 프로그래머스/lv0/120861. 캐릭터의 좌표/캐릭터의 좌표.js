function solution(keyinput, board) {    
    let [x, y] = [0, 0];
    const [xLimit, yLimit] = [Math.trunc(board[0] / 2), Math.trunc(board[1] / 2)];
    
    keyinput.map((dir) => {
        if (dir === 'left') {
            --x;
            if (x < 0) x = Math.max(x, -xLimit);
            if (x > 0) x = Math.min(x, xLimit);
        }
        
        if (dir === 'right') {
            ++x;
            if (x < 0) x = Math.max(x, -xLimit);
            if (x > 0) x = Math.min(x, xLimit);
        }
        
        if (dir === 'up') {
            ++y;
            if (y < 0) y = Math.max(y, -yLimit);
            if (y > 0) y = Math.min(y, yLimit);
        }
        
        if (dir === 'down') {
            --y;
            if (y < 0) y = Math.max(y, -yLimit);
            if (y > 0) y = Math.min(y, yLimit);
        }
    })
    
    
    
//     if (x < 0) x = Math.max(x, -xLimit);
//     if (x > 0) x = Math.min(x, xLimit);
//     if (y < 0) y = Math.max(y, -yLimit);
//     if (y > 0) y = Math.min(y, yLimit);
    
    return [x, y];
}