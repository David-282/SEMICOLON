use lagos_ride_analytics;

-- 1
SELECT DriverID, Name, Rating, TotalRides
FROM Drivers
ORDER BY Rating DESC
LIMIT 5;

-- 2
SELECT 
    RiderID,
    COUNT(*) AS total_rides
FROM Rides
GROUP BY RiderID
HAVING COUNT(*) > 5;

-- 3
SELECT SUM(Amount) AS TotalRevenue
FROM Payments;


-- 10
  SELECT 
      RideID,
      DistanceKM,
      DriverID,
      RiderID
  FROM Rides
  ORDER BY DistanceKM DESC
  LIMIT 5;

-- 11
SELECT 
    DriverID,
    COUNT(RideID) AS "Total Rides"
FROM Rides
GROUP BY DriverID
ORDER BY COUNT(RideID) DESC;


-- 12
SELECT 
    p.PaymentMethod AS "Payment Method",
    COUNT(*) AS "Number of Transactions"
FROM Payments p
WHERE p.Amount > 50000
GROUP BY p.PaymentMethod;


-- 13
-- There is no duration colum in any of the table, so there is nothing to work.



  
  

  
  
  
  
