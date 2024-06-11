function solution(array, commands) {
    return commands.map((command) => {
        const [i, j, k] = command;
        const arraySlice = [...array].slice(i-1, j);
        const arraySort = arraySlice.sort((a, b) => a - b);
        
        return arraySort[k-1];
    })
}