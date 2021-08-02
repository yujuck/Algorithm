function solution(price, money, count) {
    let totalPrice = 0;
    for (let i = 1; i < count + 1; i++) {
        totalPrice += price * i;
    }
    const result = totalPrice - money;

    return result > 0 ? result : 0;
}