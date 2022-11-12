SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, ifnull(FREEZER_YN, 'N') AS FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '경기도%'
ORDER BY WAREHOUSE_ID

/*
NULL을 처리하는 방법

1. ifnull
해당 Column의 값이 NULL을 반환할 때, 다른 값으로 출력할 수 있도록 해주는 함수

ifnull(Column명, 'NULL일 때 대체할 값')

2. IF
IF 함수와 IS NULL 조건으로 처리할 수 있다.

IF(IS NULL(Column명), 'true일 때의 값', 'false일 때의 값)

3. CASE
해당 Column 값을 조건식을 통해 True, False를 판단하여 조건에 맞게 Column값을 변환할 때 사용하는 함수

CASE 
    WHEN 조건식1 THEN 식1
    WHEN 조건식2 THEN 식2
    ...
    ELSE 조건에 맞는경우가 없는 경우 실행할 식
END

4. COALESCE
지정한 표현식들 중에 NULL이 아닌 첫 번째 값을 반환한다.
표현식은 여러 항목 지정이 가능하고, 처음으로 만나는 NULL이 아닌 값을 출력한다.
표현식이 모두 NULL일 경우엔 결과도 NULL 반환한다.

SELECT COALESCE(Column명1, Column명1이 NULL인 경우 대체할 값)
FROM 테이블명
*/