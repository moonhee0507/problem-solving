function solution(spell, dic) {
    spell = spell.sort().join('');
    
    // dic을 모두 정렬하고 요소가 있다면 1 없다면 2 반환
    return dic.map((item) => item.split('').sort().join(''))
        .find((item) => item === spell) !== undefined ? 1 : 2;
}