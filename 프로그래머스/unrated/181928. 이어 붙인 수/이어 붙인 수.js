function solution(num_list) {
    let strEven = '';
    let strOdd = '';
    
    num_list.forEach((num) => {
        num % 2 === 0 ? strEven += String(num) : strOdd += String(num);
    })
    
    return Number(strEven) + Number(strOdd);
}