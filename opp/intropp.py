import csv

class house():
    def __init__(self, address, state, Alarm, price):
        self.address = address 
        self.state = state
        self.Alarm = Alarm 
        self.price = price 

house1 = house(122, 'Riihimaki', False, 200000)
house2 = house(345, 'Raisio', True, 300000)

print(house1.Alarm)
print(house2.price)
print()

# Reading the items.csv file
print("Reading items from CSV file:")
with open('opp/items.csv', 'r') as file:
    csv_reader = csv.reader(file)
    # Skip header row if it exists
    header = next(csv_reader, None)
    # Read and print each row
    for row in csv_reader:
        # Skip empty rows
        if row:  # This checks if the row is not empty
            # Clean up each value by removing quotes and extra spaces
            cleaned_row = [value.strip().replace("'", "") for value in row]
            if len(cleaned_row) >= 3:  # Make sure we have all three values
                print(f"{cleaned_row[0]}, {cleaned_row[1]}, {cleaned_row[2]}")
            else:
                print(f"Skipping incomplete row: {cleaned_row}") 