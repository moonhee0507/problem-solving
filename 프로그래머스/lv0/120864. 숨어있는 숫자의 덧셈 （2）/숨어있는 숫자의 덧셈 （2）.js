function solution(my_string) {
    return my_string.split(/\D/g).map((item) => Number(item)).reduce((prev, curr) => prev + curr, 0); 
}