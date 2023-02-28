function solution(priorities, location) {
    let list = priorities.map((v,i)=>({
        my : i === location,
        val : v
    }));
  
    let count = 0;        
  
    while(true){
        const cur = list.splice(0,1)[0];        
        // cur.val보다 큰 값이 하나라도 있으면
        if(list.some(el => el.val > cur.val )){
            list.push(cur);                        
        } else {            
            count++;
            if(cur.my) return count;
        }
    }
}