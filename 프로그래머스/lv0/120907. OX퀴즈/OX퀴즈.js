function solution(quiz) {
    quiz = quiz.map((item) => item.replace('=', '==='));
    
    return quiz.map((item) => eval((item)) ? 'O' : 'X');
}