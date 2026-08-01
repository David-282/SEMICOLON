
select SKU, 
		SKU_Description, 
        WarehouseCity,
        WarehouseState,
		INVENTORY.WarehouseID
        
from INVENTORY,WAREHOUSE
where INVENTORY.WarehouseID = WAREHOUSE.WarehouseID
and( 
	WarehouseCity = 'Atlanta'
   OR WarehouseCity = 'Bangor'
   OR WarehouseCity = 'Chicago'
   );
   
select SKU, 
		SKU_Description, 
        WarehouseCity,
        WarehouseState,
		INVENTORY.WarehouseID
from INVENTORY,WAREHOUSE
where WarehouseCity in ("Atlanta", "Bangor","Chicago");


select SKU,
		SKU_Description,
        INVENTORY.WarehouseID,
        WarehouseCity,
        WarehouseState
from INVENTORY,WAREHOUSE
where  INVENTORY.WarehouseID = WAREHOUSE.WarehouseID
	and	WarehouseCity != 'Atlanta'
	and	WarehouseCity != "Bangor"
	and WarehouseCity != "Chicago";

        
select SKU,
		SKU_Description,
        INVENTORY.WarehouseID,
        WarehouseCity,
        WarehouseState
from INVENTORY,WAREHOUSE
WHERE WarehouseCity NOT IN ('Atlanta', 'Bangor', 'Chicago');

        
SELECT 
    CONCAT(SKU_Description, ' is located in ', WarehouseCity) AS ItemLocation
FROM INVENTORY i
JOIN WAREHOUSE w
  ON i.WarehouseID = w.WarehouseID;
  

SELECT SKU,
       SKU_Description,
       INVENTORY.WarehouseID
FROM INVENTORY,WAREHOUSE
WHERE INVENTORY.WarehouseID = WAREHOUSE.WarehouseID
    AND WAREHOUSE.MANAGER = 'Lucille Smith';
    
    
 SELECT SKU,
       SKU_Description,
       INVENTORY.WarehouseID
FROM INVENTORY, WAREHOUSE
WHERE INVENTORY.WarehouseID = WAREHOUSE.WarehouseID
    AND WAREHOUSE.Manager = 'Lucille Smith';   
    

SELECT SKU,
       SKU_Description,
       INVENTORY.WarehouseID
FROM INVENTORY
JOIN WAREHOUSE 
  ON INVENTORY.WarehouseID = WAREHOUSE.WarehouseID
WHERE WAREHOUSE.Manager = 'Lucille Smith';


SELECT 
    WarehouseID,
    AVG(QuantityOnHand) AS AvgQuantityOnHand
FROM INVENTORY
WHERE WarehouseID IN (
    SELECT WarehouseID
    FROM WAREHOUSE
    WHERE Manager = 'Lucille Smith'
)
GROUP BY WarehouseID;


SELECT INVENTORY.WarehouseID,
        AVG(QuantityOnHand) AS Average_Items
FROM INVENTORY, WAREHOUSE
WHERE INVENTORY.WarehouseID = WAREHOUSE.WarehouseID
    AND WAREHOUSE.Manager = 'Lucille Smith'
GROUP BY WarehouseID;


SELECT 
    i.WarehouseID,
    AVG(i.QuantityOnHand) AS AvgQuantityOnHand
FROM INVENTORY i
JOIN WAREHOUSE w
  ON i.WarehouseID = w.WarehouseID
WHERE w.Manager = 'Lucille Smith'
GROUP BY i.WarehouseID;

SELECT WAREHOUSE.WarehouseID,
       WarehouseCity,
       WareHouseCity,
       WarehouseState,
       Manager,
       SKU,
       SKU_Description,
       QuantityOnHand
FROM INVENTORY
    JOIN WAREHOUSE ON INVENTORY.WarehouseID = WAREHOUSE.WarehouseID
    WHERE WAREHOUSE.Manager = 'Lucille Smith';


SELECT WarehouseID,
       SUM(QuantityOnOrder) AS TotalItemsOnOrder,
       SUM(QuantityOnHand) AS TotalItemsOnHand
FROM INVENTORY
GROUP BY WarehouseID, QuantityOnOrder;


-- Subqueries are queries inside another query and are executed first to return a result used by the main query, while joins combine data from two or more tables directly in a single query result.
-- You cannot use a subquery because the question requires all the grouping and calculations to be done together in one query, and a subquery works on its own first, so it cannot properly handle it.

SELECT WAREHOUSE.*,
       INVENTORY.SKU,
       INVENTORY.SKU_Description,
       INVENTORY.QuantityOnHand,
       INVENTORY.QuantityOnOrder
FROM WAREHOUSE
LEFT JOIN INVENTORY ON WAREHOUSE.WarehouseID = INVENTORY.WarehouseID;