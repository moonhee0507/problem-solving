function solution(id_pw, db) {
    // 아이디, 비밀번호 모두 일치하는 회원정보 존재 => 'login'
    // 아이디 불일치 => 'fail'
    // 아이디 일치, 비번 불일치 => 'wrong pw'
    
    const [id, pw] = id_pw;
    const matchID = db.filter((item) => item[0] === id);
    if (matchID.length === 0) return 'fail';
    else {
        return matchID.filter((item) => item[1] === pw).length === 0 ? 'wrong pw' : 'login';
    }
}