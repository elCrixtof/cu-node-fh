/* Callback hell */
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

// const getEmployee = (id) => {
//     let employee = 0;
//     employees.forEach(element => {
//         if(element.id == id) {
//             employee = element;
//         }
//     });
//     return employee;
// }

const getEmployee = (id, callback) => {
    const employee = employees.find(element => element.id === id)
    // console.log(!!employee);
    if(!!employee) {
        callback(null, employee)
    } else {
        callback(`The employee with ID ${id} doesn't exist`);
    }
};

const getSalary = (id, callback) => {
    const salary = salaries.find(element => element.id === id)?.amount;
    if(!!salary){
        callback(null, salary);
    } else {
        callback(`The salary with id ${id} doesn't exist`);
    }
};

getEmployee(3, (err, employee) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    
    getSalary(employee.id, (err, salary) => {
        if(err) {
           console.log('ERROR!'); 
           return console.log(err);
        } 
        // console.log(`The employee ${employee.name} has a salary of ${salary.amount} dollars`);
        console.log('The employee', employee.name, 'has a salary of:', salary.amount, 'dollars');
    });
});



