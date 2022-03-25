/* Promesas */
const employees = [
    {
        id: 1,
        name: 'Morgan'
    },
    {
        id: 2,
        name: 'Valentine'
    },
    {
        id: 3,
        name: 'Danny'
    },

]

const salaries = [
    {
        id: 1,
        amount: 3000
    },
    {
        id: 2,
        amount: 2000
    },
    {
        id: 3
    },

]

const getEmployee = (id) => {
    
    return new Promise((resolve, reject) => {
        const employee = employees.find(element => element.id === id)?.name;
        (employee) 
            ? resolve(employee)
            : reject(`The employee with the ID ${id} doesn't exist`);
    });

};

const getSalary = (id) => {
    return new Promise ((resolve, reject) => {
        const salary = salaries.find(element => element.id === id)?.amount;
        (salary)
            ? resolve(salary)
            : reject(`The salary to employeee with ID ${id} doesn't exist`);
    });
};

const id = 3;
let name;

getEmployee(id)
    .then(employee => {
        name = employee;
        return getSalary(id)
    })
    .then(salary => console.log('The employee', name, 'has a salary of', salary))
    .catch(err => console.log(err));