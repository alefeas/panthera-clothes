let container_login = document.getElementById('sectLogin')

let buttonLogin = document.getElementById('login')
buttonLogin.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    login(email, pass);
})

const login = async (email,pass) => {
    try {
        const response = await fetch("https://fakestoreapi.com/users/");
        const users = await response.json();
        localStorage.setItem('users', JSON.stringify(users));
        let found = false;
        for (const user of users) {
            if(email === user.email || email === user.username && pass === user.password) {
                localStorage.setItem('user', JSON.stringify(user));
                found = true;
                console.log('Bienvenido al sistema, '+ email);
            }
        }
        if(!found) {
            console.log('Usuario/E-Mail o contraseña incorrecta.')
        }
    }
    catch(error) {
        console.log(Error);
    }
}