function solution(polynomial) {
    polynomial = polynomial.split(' + ').map((item) => {
        if (item === 'x') return '1x';
        else return item;
    }); // ['1x', '1']
    
    let x = 0;
    let n = 0;
    
    polynomial.map((item) => {
        if (item.includes('x')) {
            x += Number(item.replace(/\D/g, ''));
        }
        else n += Number(item);
    })
    
    if (x === 1) {
        x = '';
    }
    if (n === 0) return `${x}x`;
    else if (x === 0) return `${n}`;
    
    return `${x}x + ${n}`;
}