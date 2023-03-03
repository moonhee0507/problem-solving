function solution(k, dungeons) {
    let answer = 0;
    const check = Array.from({ length: dungeons.length }, () => false);
    
    const DFS = (hp, depth) => {
        answer = Math.max(answer, depth);
        
        for (let i in dungeons) {
            const [required, damaged] = dungeons[i];
            
            if (!check[i] && hp >= required) {
                check[i] = true;
                DFS(hp - damaged, depth + 1);
                check[i] = false;
            }
        }
    };
    
    DFS(k, 0);
    
    return answer;
}

