function solution(num_list) {
    if (num_list.length >= 11) {
        return num_list.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
    } else {
        return num_list.reduce((prev, curr) => {
            return prev * curr;
        }, 1);
    }
}