function solution(keyinput, board) {
    // ['left', 'right', 'up', 'right', 'right']
    //     i
    // keyinput[i]가 'left'면 x--;
    
    let [x, y] = [0, 0];
    let i = 0;
    
    while (i < keyinput.length) {
        if (keyinput[i] === 'left') {
            x--;
            if (Math.abs(x) > Math.trunc(board[0] / 2)) {
                x++;
            }
        }

        if (keyinput[i] === 'right') {
            x++;
            if (Math.abs(x) > Math.trunc(board[0] / 2)) {
                x--;
            }
        }
        
        if (keyinput[i] === 'down') {
            y--;
            if (Math.abs(y) > Math.trunc(board[1] / 2)) {
                y++;
            }
        }
        
        if (keyinput[i] === 'up') {
            y++;
            if (Math.abs(y) > Math.trunc(board[1] / 2)) {
                y--;
            }
        }

        i++;   
    }
    
    return [x, y];
}