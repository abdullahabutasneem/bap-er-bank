document.getElementById('btn-submit').addEventListener('click', function () {
    const email = document.getElementById('email-input');
    const password = document.getElementById('password-input');
    if (email.value === "tasneem@gmail.com" && password.value === "tasneem") {
        console.log("valid user");
    }
    else console.log("failed!!");
})