function solution(board) {
  let result = 0;
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // board[i][j]의 값이 1인 경우 상하좌우 및 대각선 검사
      if (board[i][j] === 1) {
        // 폭탄의 위치가 맨위가 아니고 바로 위에 또다른 폭탄이 없으면 위험지대 설정
        if (i !== 0 && board[i-1][j] !== 1) board[i-1][j] = 2;
        
        // 폭탄의 위치가 맨아래가 아니고 바로 아래 또다른 폭탄이 없으면 위험지대 설정
        if (i !== board.length-1 && board[i+1][j] !== 1) board[i+1][j] = 2;
        
        // 폭탄의 위치가 맨 왼쪽이 아니고 왼쪽에 또다른 폭탄이 없으면 위험지대 설정
        if (j !== 0 && board[i][j-1] !== 1) board[i][j-1] = 2;
        
        // 폭탄의 위치가 맨 오른쪽이 아니고 오른쪽에 또다른 폭탄이 없으면 위험지대 설정
        if (j !== board[i].length-1 && board[i][j+1] !== 1) board[i][j+1] = 2;
        
        // 폭탄의 위치가 상단왼쪽끝대각선이 아니고 왼쪽위 대각선에 폭탄이 없으면 위험지대 설정
        if (i !== 0 && j !== 0 && board[i-1][j-1] !== 1) board[i-1][j-1] = 2;
        
        // 상단오른쪽끝대각선이 아니고...
        if (i !== 0 && j !== board[i].length-1 && board[i-1][j+1] !== 1) board[i-1][j+1] = 2;
        
        // 하단 왼쪽끝대각선이 아니고...
        if (i !== board.length-1 && j !== 0 && board[i+1][j-1] !== 1) board[i+1][j-1] = 2;
        
        // 하단 오른쪽끝대각선이 아니고...
        if (i !== board.length-1 && j !== board[i].length-1 && board[i+1][j+1] !== 1) board[i+1][j+1] = 2;
      }
    }
  }
    
  return board.map((item) => item.filter((num) => num === 0).length)
      .reduce((prev, curr) => prev + curr, 0);
}