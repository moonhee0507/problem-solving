function solution(answers) {
    const totalProblem = answers.length;
    
    const person1 = "12345".repeat(Math.ceil(totalProblem / 5));
    const person2 = "21232425".repeat(Math.ceil(totalProblem / 8));
    const person3 = "3311224455".repeat(Math.ceil(totalProblem / 10));
    
    const arrPerson = [person1, person2, person3];
    
    const arrGrade = [];
    
    for (let p of arrPerson) {
        let count = 0;
        
        answers.forEach((answer, i) => {
            if (answer === Number(p[i])) ++count;
        });
        
        arrGrade.push(count);
    }
    
    const numMax = Math.max(...arrGrade);
    
    const result = [];
    arrGrade.forEach((grade, i) => {
        if (grade === numMax) result.push(i + 1);
    })
    
    return result;
}