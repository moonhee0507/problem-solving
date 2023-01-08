function solution(strings, n) {
    strings = strings.sort().map((string) => [string, string[n].charCodeAt(0)]);
    // [["bed",101],["car",97],["sun",117]]
    
    return strings.sort((a, b) => a[1] - b[1]).map((set) => set[0]);
}