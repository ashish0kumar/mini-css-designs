const loginBtn = document.querySelector(".btnLogin-popup");
const wrapper = document.querySelector(".wrapper");

const formBoxLogin = document.querySelector(".form-box.login");
const formBoxRegister = document.querySelector(".form-box.register");

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

//* login wrapper on click

loginBtn.addEventListener("click", () => {
    wrapper.classList.add("show");
})


//* login and register linking

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


//* password validation

let msg = document.querySelector("#message");
let strength = document.querySelector("#strength");
const info = document.querySelector("#info");

regPassword.addEventListener("input", () => {
    if (regPassword.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passwordVal = regPassword.value;
    let result = regex.test(passwordVal);

    if (result) {
        strength.innerHTML = "strong";
        msg.style.color = "#13463d";
    } else {
        strength.innerHTML = "weak";
        msg.style.color = "#790101";
    }
})


//* password validation info

msg.addEventListener("mouseenter", () => {
    info.style.display = "block";
})

msg.addEventListener("mouseleave", () => {
    info.style.display = "none";
})