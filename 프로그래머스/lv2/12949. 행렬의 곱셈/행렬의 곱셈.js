const solution = (arr1, arr2) => {
    return arr1.map((row) => {
        return arr2[0].map((_, cIdx) => {
            return row.reduce((prev, curr, rIdx) => {
                return prev + (curr * arr2[rIdx][cIdx]);
            }, 0)
        })
    });
}