function solution(today, terms, privacies) {
    terms = terms.map(v => v.split(' '));
    
    const termsObj = {};
    for (let values of terms) {
        termsObj[values[0]] = Number(values[1]);
    }
    
    privacies = privacies.map(v => v.split(' ')).map(w => w.map((x, i) => {
        if (i === 1) return termsObj[x];
        else return x;
    }));
    
    today = today.replaceAll('.', '');
    
    for (let i = 0; i < privacies.length; i++) {
        const expired = afterNMonth(privacies[i][0], privacies[i][1]);
        if (today.localeCompare(expired) === 1 ) privacies[i] = i + 1;
        else privacies[i] = false;
    }

    return privacies.filter(v => v);
}

function afterNMonth(date, n) {
    [yearC, monthC, dayC] = date.split('.').map(v => Number(v));
    
    dayC += n * 28 - 1;

    if (dayC > 28) {
        monthC += Math.trunc(dayC / 28);
        dayC = dayC % 28;
    }
    if (monthC > 12) {
        yearC += Math.trunc(monthC / 12);
        monthC = monthC % 12;
    } 
    if (dayC === 0) {
        dayC = 28;
        monthC--;
    }
    if (monthC === 0) {
        monthC = 12;
        yearC--;
    }
    if (monthC === 0) {
        yearC--;
        monthC = 12;
    }
   
    yearC = String(yearC);
    if (String(monthC).length === 1) monthC = '0' + String(monthC);
    if (String(dayC).length === 1) dayC = '0' + String(dayC);

    
 
    return yearC + monthC + dayC;
}