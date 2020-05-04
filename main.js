
function showformRegister() {
    document.getElementsByClassName('modal')[0].style.display='flex';
    document.getElementById('auth-form__login').style.display='none'
    document.getElementById('auth-form__register').style.display='block'

}

function backHome() {
    document.getElementsByClassName('modal')[0].style.display='none';
    document.getElementById('auth-form__register').style.display='none'
    document.getElementById('auth-form__login').style.display='none'

}

function showformLogin() {
    document.getElementsByClassName('modal')[0].style.display='flex';
    document.getElementById('auth-form__register').style.display='none'
    document.getElementById('auth-form__login').style.display='block'
}
