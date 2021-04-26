function solution(bridge_length, weight, truck_weights) {
    let queue = Array.from({length: bridge_length}, ()=>0);
    let count = 0;
    let finishTrucks = [];
    
    while (queue.length > 0) {
        let isNotAllZero = queue.some(el => el !== 0);

        if(finishTrucks.length == truck_weights.length && !isNotAllZero) break;
        
        queue.shift();
        let totalWeights = queue.reduce((acc, cur) => acc + cur);

        if(!(totalWeights + truck_weight[0] > weight) && truck_weight.length > 0) {
            let inputTruck = truck_weight.shift();
            queue.push(inputTruck);
        } else {
            queue.push(0);
        }
        count++;
    }    
    return count;
}

let truck_weight = [7, 4, 5, 6];
solution(2, 10 ,truck_weight);

// 풀긴 했는데 속도가 아쉽쓰..