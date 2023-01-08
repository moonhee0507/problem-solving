function solution(array, commands) {
    return commands.map((command) => {
        [i, j, k] = command;
        return [...array].splice(i-1, j-i+1).sort((a, b) => a - b)[k-1];
    })
}