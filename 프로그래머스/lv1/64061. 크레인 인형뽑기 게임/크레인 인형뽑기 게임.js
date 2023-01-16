function solution(board, moves) {
    let basket = []; //[4,3,1,1,3,2,4]
    
    for (let i = 0; i < moves.length; i++) {
        let locationCrane = moves[i] - 1;
        
        for (let j = 0; j < board.length; j++) {
            if (board[j][locationCrane] !== 0) {
                basket.push(board[j][locationCrane]);
                board[j][locationCrane] = 0;
                break;
            }
        }
    }
    
    let i = 0;
    let j = 1;
    //[4,3,1,1,3,2,4]   [4,3,3,2,4]     [4,2,4]
    //     i j             i j             i j
    let count = 0;
    while (j < basket.length) {
        if (basket[i] === basket[j]) {
            count += 2;
            basket.splice(i, 2);
            i = 0;
            j = 1;
        } else {
            i++;
            j++;
        }
    }
    
    return count;
}