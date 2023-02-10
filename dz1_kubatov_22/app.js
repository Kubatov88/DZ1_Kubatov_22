// first
const email = document.querySelector('.email');
const emailCheck = document.querySelector('.chek');
const emailRezalt = document.querySelector('.result');
const emoji = document.querySelector('.emoji');
const galka = document.querySelectorAll('.krest');
const password = document.getElementById('password')
// почитал про адресса электронных почт, можно вводить кроме букв и цифр только символы (- _ .)
// но они не могут находиться перед @
// практически все адреса электронных почт оканчиваються на .com .ru
const emailReg = /^[a-zA-Z0-9_.-]+[A-Za-z0-9]+@[a-z]+\.(com|ru)$/;
const passwordReg = /(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z!@#$%^&*]{6,}$/
let chek = e =>
{
    if (emailReg.test(email.value) && passwordReg.test(password.value)) {
        emailRezalt.innerText = "Правильно"
        emailRezalt.style.color = 'green'
        for (let i of galka) {
            i.innerText = '✔'
            i.style.color = 'green'
        }
    }
    else {
        emailRezalt.innerText = "Неправильный формат"
        emailRezalt.style.color = 'red'
        emoji.innerText = "😕"
        for (let i of galka) {
            i.innerText = '✖'
            i.style.color = 'red'
        }
    }
}
emailCheck.onclick = () => chek()
password.onkeydown = e => { if (e.keyCode === 13) chek() }

// second
const big = document.querySelector(".big")
const small = document.querySelector(".small")
const button = document.querySelector('.run')
const restart = document.querySelector('.restart')
let i = 0;
let go = () =>
{
    setTimeout(() => {
        if (i < 660) {
            small.style.left = (i += 10) + "px";
            go()
        }
    }, 8); 
}
button.onclick = () => go()
restart.onclick = () =>
{
    i = 0;
    small.style.left = 0 + "px";
}