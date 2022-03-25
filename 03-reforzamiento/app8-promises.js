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
    
    const promise = new Promise((resolve, reject) => {
        const employee = employees.find(element => element.id === id);
        if(employee) {
            resolve(employee);
        } else {
            reject(`The employee with the ID ${id} doesn't exist`);
        }
    });

    return promise;
};

const id = 4;

getEmployee(id)
    .then(employee => console.log(employee))
    .catch( err => console.log(err))