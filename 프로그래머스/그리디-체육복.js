function solution(n, lost, reserve) {
    let filterLost = lost.filter(num => !reserve.includes(num));
    let filterReserve = reserve.filter(num => !lost.includes(num))

    for (let i = 0; i < filterLost.length; i++) {
        if (filterReserve.includes(filterLost[i]-1)) {
            filterReserve.splice(filterReserve.indexOf(filterLost[i]-1),1);
            filterLost.splice(i,1);
            i--;
        } else if (filterReserve.includes(filterLost[i]+1)) {
            filterReserve.splice(filterReserve.indexOf(filterLost[i]+1),1);
            filterLost.splice(i,1);
            i--;
        }        
    }

    return n - filterLost.length;
}