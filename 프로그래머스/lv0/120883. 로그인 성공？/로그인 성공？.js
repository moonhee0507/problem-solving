function solution(id_pw, db) {
    db = new Map(db);
     
    if (db.get(id_pw[0]) === id_pw[1]) return 'login';
    if (db.get(id_pw[0]) === undefined) return 'fail';
    
    return 'wrong pw';
}