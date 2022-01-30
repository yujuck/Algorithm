function solution(numbers, hand) {
    let answer = '';
    const left = [1, 4, 7];
    const right = [3, 6, 9];
    const middle = [2, 5, 8, 0];
    let curLeftPosition = [3, 'L'],  curRightPosition = [3, 'R'];
    let leftDistance, rightDistance;
    
    for (let i = 0; i < numbers.length; i++) {
        if (left.includes(numbers[i])) {
            answer += 'L';
            curLeftPosition = [left.indexOf(numbers[i]), 'L'];
        } else if (right.includes(numbers[i])) {
            answer += 'R';
            curRightPosition = [right.indexOf(numbers[i]), 'R'];
        } else {
            let middleIdx = middle.indexOf(numbers[i]);

            leftDistance = curLeftPosition[1] === 'L' ? 
                            Math.abs(curLeftPosition[0] - middleIdx) + 1 
                            : Math.abs(curLeftPosition[0] - middleIdx);
            rightDistance = curRightPosition[1] === 'R' ? 
                            Math.abs(curRightPosition[0] - middleIdx) + 1
                            : Math.abs(curRightPosition[0] - middleIdx);

            if ((leftDistance == rightDistance && hand==='left') || (leftDistance < rightDistance)) {
                answer+='L';
                curLeftPosition = [middle.indexOf(numbers[i]), 'M'];
            } else {
                answer+='R';
                curRightPosition = [middle.indexOf(numbers[i]), 'M'];
            }
        }
    }
    return answer;
}