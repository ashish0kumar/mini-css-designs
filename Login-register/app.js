const loginBtn = document.querySelector(".btnLogin-popup");
const wrapper = document.querySelector(".wrapper");

const formBoxLogin = document.querySelector(".form-box.login");
const formBoxRegister = document.querySelector(".form-box.register");

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

loginBtn.addEventListener("click", () => {
    wrapper.classList.add("show");
})

registerLink.addEventListener("click", () => {
    formBoxLogin.classList.remove("show");
    formBoxLogin.classList.add("hide");
    formBoxRegister.classList.add("show");
})

loginLink.addEventListener("click", () => {
    formBoxRegister.classList.remove("show");
    formBoxRegister.classList.add("hide");
    formBoxLogin.classList.add("show");
})

//* Reload on clicking Logo

const logoBtn = document.querySelector("#logo");

logoBtn.addEventListener("click", () => {
    window.location.reload();
})


//* Show and hide password

const showHidePassword = (password, eyeIcon) => {

    eyeIcon.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            eyeIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        } else {
            password.type = "password";
            eyeIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        }
    })
}

let loginPassword = document.querySelector("#login-password");
let loginEyeIcon = document.querySelector("#login-eye-icon");
showHidePassword(loginPassword, loginEyeIcon);

let regPassword = document.querySelector("#reg-password");
let regEyeIcon = document.querySelector("#reg-eye-icon");
showHidePassword(regPassword, regEyeIcon);