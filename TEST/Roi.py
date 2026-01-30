capital = int(input("Enter the capital: "))
years = int(input("Enter the years of years: "))
rate = float(input("Enter the interest rate: "))


for years in range(0,years):
     capital += (capital*(rate/100))
     print(f" {years+1}    {rate}     {capital}")
     


