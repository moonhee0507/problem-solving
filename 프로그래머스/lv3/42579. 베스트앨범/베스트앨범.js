function solution(genres, plays) {
    let answer = [];
    
    let objTotalPlay = {}; // 장르 순서 정함
    
    genres.forEach((genre, i) => {
        if (objTotalPlay[genre] === undefined) {
            objTotalPlay[genre] = plays[i];
        } else {
            objTotalPlay[genre] += plays[i];
        }
    })
    
    const arrDesc = Object.entries(objTotalPlay).sort((a, b) => b[1] - a[1]);
    
    // 모든 플레이 정보 배열
    let arrPlayInfo = genres.map((genre, i) => {
        return { genre: genre, index: i, numPlay: plays[i] }
    });
    
    // 장르 순서에 맞춰 장르당 순서 정함
    arrDesc.forEach(([genre, _], i) => {
        let arrSameGenre = [];
        
        for (let j = 0; j < arrPlayInfo.length; j++) {
            if (genre === arrPlayInfo[j].genre) {
                arrSameGenre.push(arrPlayInfo[j]);
            }
        }
        
        arrSameGenre.sort((a, b) => b.numPlay - a.numPlay);
        
        arrSameGenre.forEach((v, i) => {
            if (i < 2) {
                answer.push(v.index);
            }
        })
    })
    
    return answer;
}