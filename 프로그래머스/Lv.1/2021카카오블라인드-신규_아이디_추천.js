function solution(new_id) {
    let id = new_id.toLowerCase()
                .replace(/[^\w-_.]/g, '')
                .replace(/\.+/g, '.')
                .replace(/^\.|\.$/g, '')
                .replace(/^$/g, 'a')
                .slice(0,15)
                .replace(/\.$/g, '');
    
    const len = id.length;
                
    return len < 3 ? id + id[len-1].repeat(3-len) : id;
}

// 마지막에 repeat한 부분을 padEnd()라는 메소드를 사용해서 바로 return시킬 수도 있음.
/*
    const len = id.length;
    return len < 3 ? id + id[len-1].repeat(3-len) : id;
    
    이 부분을 밑에처럼..
    
    return id.padEnd(3, id[id.length-1])

    padEnd() 메서드는 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환. 
    채워넣기는 대상 문자열의 끝(우측)부터 적용.
 */