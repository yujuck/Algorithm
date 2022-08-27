function solution(id_list, report, k) {
    let answer = [];
    const reportDoc = id_list.reduce((acc, cur) => {
        acc[cur] = {
            reportedUser: new Set(),
            reportedCount: 0
        };
        return acc;
    }, {});
    
    let stop = [];
    for (const r of report) {
        const [user, reportedUser] = r.split(' ');
        if (reportDoc[user].reportedUser.has(reportedUser)) continue;
        
        reportDoc[user].reportedUser.add(reportedUser);
        if(++reportDoc[reportedUser].reportedCount >= k) stop.push(reportedUser);
    }
    
    stop = Array.from(new Set(stop));

    for (const user of Object.keys(reportDoc)) {
        const ru = Array.from(reportDoc[user].reportedUser)
        const result = ru.filter(el => stop.includes(el))
        answer.push(result.length)
    }

    return answer;
}