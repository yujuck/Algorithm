function solution(priorities, location) {
    var answer = 1;
    while(priorities.length > 0) {
        let [first, ...rest] = priorities
        let max = Math.max(...rest);
        if(first < max) {
            priorities.push(first);
            priorities.shift(first);
            if(location == 0) {
                location = priorities.length - 1;
            } else {
                location -= 1;
            }
        } else {
            if(location == 0) {
                return answer;
            } else {
                answer++;
                priorities.shift(first);
                location -= 1;
            }        
        }
    }
}