let btn = document.querySelector('.eyes');
btn.addEventListener('click', function () {
    let input = document.querySelector('.password');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        btn.classList.remove("fa-eye")
        btn.classList.add("fa-eye-slash")
    } else {
        input.setAttribute('type', 'password');
        btn.classList.remove("fa-eye-slash")
        btn.classList.add("fa-eye")
    }
});
