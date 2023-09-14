function solution(phone_book) {
    phone_book.sort();
    
    const isPrefix = phone_book.some((element, i) => {
        return phone_book[i+1]?.indexOf(element) === 0;
    });
    
    return !isPrefix;
}