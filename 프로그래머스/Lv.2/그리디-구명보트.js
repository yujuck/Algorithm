function solution(people, limit) {
    people.sort((a,b) => b - a);
    
    let first = 0;
    let last = people.length - 1;
    let count = 0;
    
    while(first <= last) {
        if (people[first] + people[last] <= limit) {
            count++;
            first++;
            last--;
        } else {
            count++;
            first++;
        }
    }
    
    return count;
}