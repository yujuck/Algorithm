SELECT left(PRODUCT_CODE,2) as CATEGORY, COUNT(*) as PRODUCTS
FROM PRODUCT
GROUP BY CATEGORY
ORDER BY CATEGORY