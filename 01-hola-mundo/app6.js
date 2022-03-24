/* Callbacks */

setTimeout( function() {
    console.log('Hi hi!');
}, 1000)

const getUserID = (id, callback) => {
    const user = {
        // id: id,
        id,
        name: 'Pedro'
    }

    setTimeout(() => {
        callback(user);
    }, 1000)
}

getUserID(1234, ({name, id}) => {
    console.log(`Name: ${name.toUpperCase()} ID: ${id}`);
});