class Item: 
    rate = 0.15
    all = []
    
    def __init__(self, name, price, quantity): 
        self.name = name
        self.price = price
        self.quantity = quantity 
        assert price >= 0, "Price cannot be negative"
        assert quantity >= 0, "Quantity cannot be negative"

#     self.all.append(self)
        Item.all.append(self)

    def calculate_total_price(self):
        return self.price * self.quantity 
    
    def apply_discount(self):
        self.price = self.price * self.rate

    def __repr__(self):

        return f"{self.name} : {self.price}, price: {self.price * self.quantity} and Quantity: {self.quantity}" 
    
item1 = Item('phone', 10, 5)

item2 = Item('laptop', 5, 12)

item3 = Item('tablet', 15, 8)

item4 = Item('monitor', 20, 3)

item5 = Item('keyboard', 8, 10)

print(Item.all)

for instance in Item.all:
    print()
    print(instance.name)



