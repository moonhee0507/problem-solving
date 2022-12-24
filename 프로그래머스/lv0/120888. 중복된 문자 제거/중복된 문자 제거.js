function solution(my_string) {
    const array = my_string.split('');
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) array[j] = false;
        }
    }
    
    return array.filter((str) => str !== false).join('');
}