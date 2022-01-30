function solution(citations) {
    let arr = citations.sort((a,b) => a - b);
    let hIndex = 0;
    
    for (let i = 0; i < arr.length;) {
        if (hIndex + 1 <= arr[i]) {
            if(hIndex >= arr.length - i) break;
            else hIndex++;
        } else i++;        
    }
    
    return hIndex;
}