from module import Employee

def calculator(km, gaz, mpg):
    price = gaz*(km/ mpg) 
    price = int(price)
    return price 

def anita(): 
    gasprice = float(input("Enter the price of gas per liter: "))
    trip_km = float(input("Enter the distance in kilometers: "))
    avg_mpg = float(input("Enter the fuel consumption in liters per 100 km: ")) 

    total_price = calculator(trip_km, gasprice, avg_mpg)
    print(f"The total cost of the trip is: {total_price} euros") 
    print() 

def goti(anita_ero):
    evanye = 'anita le drom nuto'
    print(evanye) 

    salary = float(input("Enter your salary: "))
    tax = float(input("Enter the tax percentage: "))
    # Using the Employee class's static method
    net_salary = Employee.fastcal(salary, tax)
    print(f'Net salary after {tax}% tax: {net_salary}')
    print()
print()

evanye = 'anita ba gome vivina nutto' 
goti(evanye)
print(evanye)

print(evanye)


if __name__== "__main__":
    anita()
