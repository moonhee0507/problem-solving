function solution(s) {
    let obj = {};
    let array = s.split(''); // ["a", "b", "c", "a", "b", "c", "a", "d", "c"]
    
    for (let i = 0; i < s.length; i++) {
        obj[array[i]] = obj[array[i]] === undefined ? 1 : ++obj[array[i]];    
    }
    // [["d",1], ["a",3], ["c",3], ["b",2]]
    const arraySort = Object.entries(obj).sort((a, b) => a[1] - b[1])
    const arrayFilter = arraySort.filter((item) => item[1] === 1);
    if (arrayFilter.length === 1) {
        return arrayFilter[0][0];
    } else if (arrayFilter.length > 1) {
        return arrayFilter.map((item) => item[0]).sort().join('');
    } else if (arrayFilter.length === 0) {
        return ''
    }
}