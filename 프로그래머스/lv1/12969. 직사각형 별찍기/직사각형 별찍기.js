process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); // a는 가로길이, b는 세로길이
    
    let star = '';
    
    for (let i = 1; i <= b; i++) {
        for (let j = 1; j <= a; j++) {
            star += '*';
        }
        star += '\n'
    }
    console.log(star);
});