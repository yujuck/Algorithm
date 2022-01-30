function solution(skill, skill_trees) {
    let answer = 0;
    
    for (let st of skill_trees) {
        let isOk = true;
        let filterSt = st.split('').filter(el => skill.includes(el)).join('');
        
        for (let i in filterSt) {
            if (skill[i] !== filterSt[i]) {
                isOk = false;
                break;
            }
        }
        isOk ? answer++ : null;
    }
    
    return answer;
}