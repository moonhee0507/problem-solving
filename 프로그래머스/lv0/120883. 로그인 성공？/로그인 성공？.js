function solution(id_pw, db) {
    // 아이디, 비밀번호 모두 일치하는 회원정보 존재 => 'login'
    // 아이디 불일치 => 'fail'
    // 아이디 일치, 비번 불일치 => 'wrong pw'
    
    const [id, pw] = id_pw;
    const mapObj = new Map(db);
    
    // mapObj = Map(3) { 'rardss' => '123', 'yyoom' => '1234', 'meosseugi' => '1234', __proto__: {...} }
    return mapObj.has(id) ? (mapObj.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}