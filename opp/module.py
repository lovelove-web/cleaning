class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def display(self):
        print(f"Employee Name: {self.name}, Salary: {self.salary}")
    
    @staticmethod
    def fastcal(salary, percentage):
        final = (salary * ((100 - percentage) / 100)) 
        return final 
