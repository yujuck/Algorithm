function solution(progresses, speeds) {
    let needDays = progresses.map((progress, index) => Math.ceil((100-progress) / speeds[index]));
    let result = [];
    
    while (needDays.length > 0) {
        let releaseCount = release(needDays);

        needDays.splice(0,releaseCount);
        result.push(releaseCount);

        if(needDays.length == 0) break;
    }
    return result;
}
function release(arr) {
    let pointer = arr[0];
    let result;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (pointer < arr[i+1] || arr[i+1] == undefined) {
            result = count + 1;
            count = 0;
            break;
        } else {
            count++;
        }
    }
    return result;
}

let progress = [95, 90, 99, 99, 80, 99];
let speed = [1, 1, 1, 1, 1, 1];
solution(progress, speed);


// 다른 사람 풀이
function solution2(progresses, speeds) {
    let result = [];
    while (progresses.length !== 0) {
        let count = 0;
        progresses = progresses.map((progress, index) => progress+speeds[index]);
        
        while(progresses[0] >= 100) {
            count++;
            progresses.shift();
            speeds.shift();
        }
        if(count > 0) {
            result.push(count);
        }
    }
    return result;
}