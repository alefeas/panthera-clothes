//LOGIN
let container_login = document.getElementById('sectLogin')
let container_login_register = document.getElementById('containerLoginRegister')

let buttonLogin = document.getElementById('login')
buttonLogin.addEventListener('click', () => {
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    login(email, pass)
})

if(localStorage.getItem('user')){
    container_login_register.innerHTML=`
    <p>Bienvenido </p>
    <button id="btnLogOut">Cerrar sesión</button>
`   
}
const login = async (email,pass) => {
    try {
        const response = await fetch("https://fakestoreapi.com/users/")
        const users = await response.json()
        let found = false
        localStorage.setItem('users', JSON.stringify(users))
            for (const user of users) {
                if(email === user.email || email === user.username && pass === user.password) {
                    localStorage.setItem('user', JSON.stringify(user))
                    found = true
                    location.reload()
                }
            }
            if(!found) {
                Swal.fire({
                    title: 'El E-Mail/Usuario no coinciden con la contraseña.',
                    fontSize:'10px',
                    confirmButtonColor: '#d3b246',
                })
            }
    }
    catch(error) {
        console.log(Error)
    }
}

//LOGOUT
let btn_log_out = document.getElementById('btnLogOut')
btn_log_out.addEventListener ('click', function(){
    localStorage.removeItem('user')
    window.location.href = '../pages/user.html'
}) 