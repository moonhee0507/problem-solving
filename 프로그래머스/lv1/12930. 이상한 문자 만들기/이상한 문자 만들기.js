function solution(s) {    
    s = s.split(' ').map((str) => str.split('')); // [[t,r,y],[h,e,l,l,o],[w,o,r,l,d]]
    
    return s.map((el) => el.map((v, i) => {
        
        if (i % 2 === 0) return v.toUpperCase();
        else return v.toLowerCase();
        
    }).join('')).join(' ');
}