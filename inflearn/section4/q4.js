// 졸업선물

function solution(m, product){
    let answer = 0;
    let student = product.length;

    product.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]));
   
    for (let i = 0; i < student; i++) {
        let money = m - (product[i][0] / 2 + product[i][1]);
        let cnt = 1;

        for (let j = 0; j < student; j++) {
            let price = product[j][0] + product[j][1];
            if (i !== j && price > money) break;
            
            if (i !== j && price <= money) {
                money -= price;
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));