function solution(my_string) {
    const arrayLower = my_string.toLowerCase().split(''); // ['b', 'c', 'a', 'd'];
    let array = [];
    
    for (let i = 0; i < arrayLower.length; i++) {
        array.push([arrayLower[i], arrayLower[i].charCodeAt(0)]);   
    }
    
    array.sort((a, b) => a[1] - b[1]);
    
    return array.map((item) => item[0]).join('');
    
}