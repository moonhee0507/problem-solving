function solution(my_string) {
    let answer = 0;
    my_string = my_string.split(' ').map((str, i) => i % 2 === 0 ? parseInt(str) : str); 
    // [3, '+', 4]
    
    for (let i = 0; i < my_string.length; i++) {
        if (i % 2 !== 0) {
            my_string[i+1] = my_string[i] === '-' ? -my_string[i+1] : my_string[i+1];   
        }
    }
    
    return my_string.filter((item) => item % 1 === 0).reduce((prev, curr) => prev + curr, 0);
}