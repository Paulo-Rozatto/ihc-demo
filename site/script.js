const items = [
    "casaco",
    "feijão",
    "papel"
]

const users = [
    {
        login: "joao",
        password: "123"
    },
    {
        login: "maria",
        password: "123"
    }
]

let isLogged = false;
let donateLater = false;

function search(event) {
    const items = document.getElementsByClassName('item');
    const target = searchInput.value;
    console.log(event)

    for (let item of items) {
        console.log(item.id)
        let display = item.id.includes(target) ? 'block' : 'none';
        item.style.display = display;
    }

    if (event.key == "Enter") {
        searchInput.value = "";
    }
}

function donate() {
    if (isLogged) {
        window.confirm("Confirmar doção?");
    }
    else {
        donateLater = true;
        btnUser.click();
    }
}

function enableLogin(donateLater) {
    let lg = !!(login.value.trim().length)
    let ps = !!(password.value.trim().length)
    console.log(password.value.trim().length, ps)

    if (lg && ps) {
        btnLogin.className = btnLogin.className.replace(" disabled", "");
    }
    else if (!btnLogin.className.includes("disabled")) {
        btnLogin.classList.add("disabled");
    }
}

function sigin() {
    const log = login.value.trim();
    const pass = password.value;

    console.log(log, typeof pass)
    isLogged = users.find(usr => usr.login === log && usr.password === pass);

    if (isLogged) {
        btnCancel.click();
        setTimeout(() => { alert('Logado!') }, 100);

        if (donateLater) {
            donateLater = false;
            setTimeout(donate, 200);
        }
    }
    else {
        alert('Usuario ou senha errados!');
        password.value = "";
    }
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('keydown', search)

const login = document.getElementById('login');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const btnCancel = document.getElementById('btn-cancel');
const btnUser = document.getElementById('btn-user');

login.addEventListener('keyup', enableLogin, false);
password.addEventListener('keyup', enableLogin, false);
// btnLogin.addEventListener('onclick', sigin, false);
