function solution(babbling) {
    const changeWordToNum = (word) => {
        const canBab = ['aya', 'ye', 'woo', 'ma'];
        
        return canBab.reduce((prev, curr, i) => prev.replaceAll(curr, i), word);
    }
    
    const canSpeak = (word) => {
        const result = changeWordToNum(word).split('').map((item) => {
            return parseInt(item) % 1 === 0 ? parseInt(item) : item;
        })
        
        return result.every((item) => item % 1 === 0);
    }
    
    return babbling.filter((word) => canSpeak(word)).length;
}