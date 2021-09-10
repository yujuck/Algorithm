function solution(table, languages, preference) {
    const scoreArr = [0,0,0,0,0];
    
    for (const lang of languages) {

        const langIdx = languages.indexOf(lang);
        
        for (const col of table) {
            const idx = col.split(' ').indexOf(lang);
            if (idx < 0) {
                scoreArr[table.indexOf(col)] += 0
                continue;
            }
            
            const score = (6 - idx) * preference[langIdx];
            scoreArr[table.indexOf(col)] += score
        }
    }
    
    let max = scoreArr[0];
    let answer = table[0].split(" ")[0];
    for (let i=1; i < scoreArr.length; i++) {
        if (max < scoreArr[i]) {
            max = scoreArr[i];
            answer = table[i].split(" ")[0]
        } else if (max === scoreArr[i]) {
            answer = answer[0] < table[i].split(" ")[0] ? answer : table[i].split(" ")[0];
        }
    }
    return answer;
}