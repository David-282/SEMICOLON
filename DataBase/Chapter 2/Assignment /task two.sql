SELECT * FROM mdc_ch02.CUSTOMER;

SELECT * FROM mdc_ch02.INVOICE_ITEM;

SELECT * FROM mdc_ch02.INVOICE;

 
select LastName,FirstName,Phone
from CUSTOMER;

select LastName,FirstName,Phone
from CUSTOMER
where FirstName = 'Nikki';

select LastName, FirstName, Phone, DateIn, DateOut
from CUSTOMER,INVOICE
where TotalAmount > 100;

select LastName,FirstName,Phone
from CUSTOMER
where FirstName like'B%';

select LastName,FirstName,Phone
from CUSTOMER
where LastName like '%cat%';

select LastName,FirstName,Phone
from CUSTOMER
where Phone like '_23%';


SELECT 
    MAX(TotalAmount) AS MaxTotalAmount,
    MIN(TotalAmount) AS MinTotalAmount
FROM INVOICE;


SELECT AVG(TotalAmount) AS AverageAmount
FROM INVOICE;


SELECT COUNT(*) AS TotalCustomers
FROM CUSTOMER;

SELECT LastName, FirstName
FROM CUSTOMER
GROUP BY LastName, FirstName;


SELECT 
    LastName,
    FirstName,
    COUNT(*) AS NumberOfCustomers
FROM CUSTOMER
GROUP BY LastName, FirstName;


-- M
SELECT LastName, FirstName, Phone
FROM CUSTOMER
WHERE CustomerID IN (
    SELECT CustomerID
    FROM INVOICE
    WHERE TotalAmount > 100.00
)
ORDER BY LastName ASC, FirstName DESC;

-- n
SELECT DISTINCT c.LastName, c.FirstName, c.Phone
FROM Customers c, Orders o
WHERE c.CustomerID = o.CustomerID
  AND o.TotalAmount > 100.00
ORDER BY c.LastName ASC, c.FirstName DESC;


-- o
SELECT DISTINCT c.LastName, c.FirstName, c.Phone
FROM CUSTOMER c
JOIN INVOICE i
    ON c.CustomerID = i.CustomerID
WHERE i.TotalAmount > 100.00
ORDER BY c.LastName ASC, c.FirstName DESC;


-- p
SELECT LastName, FirstName, Phone
FROM CUSTOMER
WHERE CustomerID IN (
    SELECT CustomerID
    FROM INVOICE
    WHERE InvoiceNumber IN (
        SELECT InvoiceNumber
        FROM INVOICE_ITEM
        WHERE Item = 'Dress Shirt'
    )
)
ORDER BY LastName ASC, FirstName DESC;


SELECT DISTINCT c.LastName, c.FirstName, c.Phone
FROM CUSTOMER c, INVOICE i, INVOICE_ITEM ii
WHERE c.CustomerID = i.CustomerID
  AND i.InvoiceNumber = ii.InvoiceNumber
  AND ii.Item = 'Dress Shirt'
ORDER BY c.LastName ASC, c.FirstName DESC;


SELECT DISTINCT c.LastName, c.FirstName, c.Phone
FROM CUSTOMER c
JOIN INVOICE i
    ON c.CustomerID = i.CustomerID
JOIN INVOICE_ITEM ii
    ON i.InvoiceNumber = ii.InvoiceNumber
WHERE ii.Item = 'Dress Shirt'
ORDER BY c.LastName ASC, c.FirstName DESC;