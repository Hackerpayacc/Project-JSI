// Animation
function flip() {
  document.querySelector(".flip-card-inner").style.transform =
    "rotateY(180deg)";
}

function flipAgain() {
  document.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
}

let eye = document.getElementById("eye-login");
let password = document.getElementById("password-login");

eye.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eye.className = "fa fa-eye";
    eye.style.color = "cyan";
    // password.style.border =" 1px solid cyan";
  } else {
    password.type = "password";
    eye.className = "fa fa-eye-slash";
    eye.style.color = "white";
    // password.style.border =" 1px solid white";
  }
};

let eye2 = document.getElementById("eye-signup");
let password2 = document.getElementById("password-signup");

eye2.onclick = function () {
  if (password2.type == "password") {
    password2.type = "text";
    eye2.className = "fa fa-eye";
    eye2.style.color = "cyan";
    // password2.style.border =" 1px solid cyan";
  } else {
    password2.type = "password";
    eye2.className = "fa fa-eye-slash";
    eye2.style.color = "white";
    // password2.style.border =" 1px solid white";
  }
};

//Register

const registerform = document.getElementById("register-form");

registerform.addEventListener("submit", function (e) {
  e.preventDefault();
  const userName = registerform.username.value;
  const email = registerform.email.value;
  const pass = registerform.password.value;
  // function validate
  function validate() {
    if (userName.trim() === "" || email.trim() === "" || pass.trim() === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return false;
    }
    // Validate email hợp lệ
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("email không hợp lệ");
      return false;
    }
    if (pass.length < 6) {
      alert("Mật khẩu phải chứa ít nhất 6 kí tự");
      return false;
    }
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])/;
    if (!passwordPattern.test(pass)) {
      alert("Mật khẩu phải chứa ít nhất 1 chữ hoa và 1 kí tự đặc biệt");
      return false;
    }
    return true;
  }
  if (validate()) {
    async function register() {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          email,
          pass
        );
        alert("Đăng kí thành công");
        //Gửi email
        await auth.currentUser.sendEmailVerification();
        //Update profile
        await auth.currentUser.updateProfile({
          displayName: userName,
          photoURL:
            "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg",
        });
      } catch (err) {
        alert("Đã xảy ra lỗi:" + err);
      }
    }
    register();
  }
});

// Login
const loginform = document.getElementById("login-form");

loginform.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = loginform.email.value;
  const pass = loginform.password.value;
  function validate() {
    if (email === "" || pass === "") {
      alert("Vui lòng điền đủ thông tin");
      return false;
    }
    return true;
  }
  if (validate()) {
    async function login() {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(
          email,
          pass
        );
        const user = userCredential.user;
        if (!user.emailVerified) {
          auth.signOut();
          alert("Vui lòng xác thực email");
        } else {
          alert("Đăng nhập thành công");
          window.location.href = "index.html";
        }
      } catch (err) {
        alert("Đã xảy ra lỗi:" + err);
      }
    }
    login();
  }
});
