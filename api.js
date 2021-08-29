
/* function usersdata(data) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function displayUsers(data) {
    const getuser = document.getElementById('users');
    for(let user of data) {
        const li = document.createElement('li')
        li.innerText = `Name :${user.name}
        Gmail :${user.email}
        `;
        getuser.appendChild(li);
    }
    
} */
const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } };
const { brand } = premikas.cars;
console.log({ brand });