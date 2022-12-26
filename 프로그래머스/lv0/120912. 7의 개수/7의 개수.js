function solution(array) {
    // '77717' => ['', '', '', '1', '']     '1029' => ['1', '29']
    return array.join('').split('7').length - 1;
}