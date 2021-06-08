function solution(phone_number) {
    var answer = '';
    const x = phone_number.split('');
    for(let i = 0; i< x.length - 4; i++) {
        x[i] = "*";
    }
    return x.join('');
}