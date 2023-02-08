// ISA(류)님 코드로 공부했습니다
// https://isa-dev.tistory.com/157


function solution(grid) {
  const answer = [];
  
  // 1. 입력받은 grid의 각 격자의 상하좌우 방향을 표현한 배열 cycle 얻기
  const cycle = grid.map(row => row.split('') // [['S', 'L'], ['L', 'R']]
                .map(() => Array(4).fill(true)));
  // console.log(cycle);
  // [
  //   [[ true, true, true, true ],[ true, true, true, true ]], <- row
  //    ^^^^^^^^^^^^^^^^^^^^^^^^^^         ^^^^
  //               col                     route
  //   [[ true, true, true, true ],[ true, true, true, true ]]  <- row
  // ]
  
  // 2. 빛의 방향 down, right, up, left의 좌표 변화 값 direct 얻기
  const direct = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  
  // 3. cycle의 각 격자의 4가지 방향을 탐색하면서 방문하지 않은 방향부터 탐색 시작하기
  //   3-1. 함수 checkCycle = 입력받은 grid의 모든 루트를 방문해서 경로 사이클 카운트
  cycle.forEach((row, rdx) => {
    row.forEach((col, cdx) => {
      col.forEach((route, idx) => {
        if (route) answer.push(checkCycle(rdx, cdx, idx));
      })
    })
  })
  
  function checkCycle(rdx, cdx, idx) {
    let result = 0;
    
    // 방문하는 장소에 따라 방향을 변경하면서 방문한 route를 모두 카운트
    while (true) {
      // 현 지점부터 이미 방문한 지점을 만나기 전까지 방문한 지점들을 false로 체크
      if (!cycle[rdx][cdx][idx]) break; // 이미 방문 => 반복문 중지
      cycle[rdx][cdx][idx] = false;
      result++;
      
      // 한 경로 사이클을 돈 후 처리사항
      rdx += direct[idx][0]; // 행 옮기기
      cdx += direct[idx][1]; // 열 옮기기
      if (rdx < 0) rdx = cycle.length - 1;
      if (rdx >= cycle.length) rdx = 0;
      if (cdx < 0) cdx = cycle[0].length - 1;
      if (cdx >= cycle[0].length) cdx = 0;
      
      if (grid[rdx][cdx] === 'L') idx = [1, 2, 3, 0][idx]; // down->right, right->up, up->left, left->down
      if (grid[rdx][cdx] === 'R') idx = [3, 0, 1, 2][idx]; // down->left, right->down, up->right, left->up
    }
    
    return result;
  }
  
  return answer.sort((a, b) => a - b);
}