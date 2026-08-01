
select SKU, SKU_Description from INVENTORY;

select  SKU_Description, SKU from INVENTORY;

select WarehouseID from INVENTORY;

select distinct WarehouseID from INVENTORY; 

select * from INVENTORY;

select WarehouseID, SKU,SKU_Description,QuantityOnHand,QuantityOnOrder FROM INVENTORY;

select * from INVENTORY where QuantityOnHand > 0;

select SKU,SKU_Description from INVENTORY where QuantityOnHand = 0;

select  SKU, SKU_Description, WarehouseID from INVENTORY  where QuantityOnHand = 0 order by WarehouseID asc;

select  SKU, SKU_Description, WarehouseID from INVENTORY  where QuantityOnHand > 0 order by WarehouseID desc, SKU asc;


select  SKU, SKU_Description,  WarehouseID from INVENTORY where QuantityOnHand = 0 & QuantityOnHand > 0 order by WarehouseID desc, SKU asc;

select SKU,SKU_Description , WarehouseID from INVENTORY where QuantityOnHand = 0 or QuantityOnOrder = 0 order by WarehouseID desc, SKU asc;

select SKU,SKU_Description, WarehouseID, QuantityOnHand from INVENTORY where QuantityOnHand >1 and QuantityOnHand < 10;

select SKU,SKU_Description, WarehouseID, QuantityOnHand from INVENTORY where QuantityOnHand  between 2 and 9;

select  distinct SKU,SKU_Description from INVENTORY where SKU_Description like 'Half-Dome%';
 
select  distinct SKU,SKU_Description from INVENTORY where SKU_Description like '%Climb%';
 
select  distinct SKU,SKU_Description from INVENTORY where SKU_Description like '__d%';

  SELECT 
    COUNT(QuantityOnHand) AS Total_Products,
    SUM(QuantityOnHand) AS Total_Quantity,
    AVG(QuantityOnHand) AS Average_Quantity,
    MIN(QuantityOnHand) AS Minimum_Quantity,
    MAX(QuantityOnHand) AS Maximum_Quantity
FROM INVENTORY;

SELECT 
    WarehouseID,
    SUM(QuantityOnHand) AS TotalItemsOnHand
FROM INVENTORY
GROUP BY WarehouseID
ORDER BY TotalItemsOnHand DESC;
  
  
SELECT 
    WarehouseID,
    SUM(QuantityOnHand) AS TotalItemsOnHandLT3
FROM INVENTORY
WHERE QuantityOnHand < 3
GROUP BY WarehouseID
ORDER BY TotalItemsOnHandLT3 DESC;

SELECT 
    WarehouseID,
    SUM(QuantityOnHand) AS TotalItemsOnHandLT3
FROM INVENTORY
WHERE QuantityOnHand < 3
GROUP BY WarehouseID
HAVING COUNT(SKU) < 2
ORDER BY TotalItemsOnHandLT3 DESC;

-- 2.35 = COUNT: This is uded to count the number of rows that have vaalues and are not null, Sum is used to add up the the numeric values in a colum 

-- 2. 39 = The where clause was applied first  to remove the rows.

