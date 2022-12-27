function solution(spell, dic) {
    spell = spell.sort().join(''); // 'ops'
    
    return dic.map((item) => item.split('').sort().join(''))
        .find((item) => item === spell) !== undefined ? 1 : 2;
}