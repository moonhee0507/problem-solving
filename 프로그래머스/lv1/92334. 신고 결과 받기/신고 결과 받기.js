function solution(id_list, report, k) {
    report = [...new Set(report)].map(str => str.split(' '));
    const objReported = {};
    
    for (let values of report) {
        objReported[values[1]] = ++objReported[values[1]] || 1;
    }
    
    const arrReportedId = Object.entries(objReported)
                             .filter(v => v[1] >= k).map(v => v[0]);

    let table = {};
    
    for (let values of id_list) {
        table[values] = [];
    }
    for (let values of report) {
        table[values[0]].push(values[1]);
    }

    return Object.values(table).map(v => {
        let count = 0;
        
        for (let i = 0; i < v.length; i++) {
            if (arrReportedId.includes(v[i])) count++;
        }
        
        return count++;
    })
    
}