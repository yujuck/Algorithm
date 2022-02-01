function solution(sizes) {
    let max_wdt = 0;
    let max_hgh = 0;

    for (let size of sizes) {
        if (size[0] < size[1]) {
            let temp = size[0];
            size[0] = size[1];
            size[1] = temp;
        }
        max_wdt = max_wdt <= size[0] ? size[0] : max_wdt;
        max_hgh = max_hgh <= size[1] ? size[1] : max_hgh;
    }

    return max_wdt * max_hgh;
}