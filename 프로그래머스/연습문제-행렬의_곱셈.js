function solution(arr1, arr2) {
    let result = Array.from({length: arr1.length}, () => Array.from({length: arr2[0].length}, () => 0));
    
    for (let a = 0; a < arr1.length; a++) {
        for (let b = 0; b < arr2[0].length; b++) {
            let i = 0;
            while(i < arr1[0].length) {
                result[a][b] += arr1[a][i] * arr2[i][b];
                i++;
            }
        }
    }
    
    return result;
}