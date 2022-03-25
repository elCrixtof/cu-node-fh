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

const getEmployee = (id, callback) => {
    const employee = employees.find(element => element.id === id)
    
    const promise = new Promise
};

// getEmployee(id)
//     .then(employee => console.log(employee);)