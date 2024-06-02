auth.onAuthStateChanged(function (user) {
  if (user) {
    document.querySelector(".form").innerHTML = `
        <a href="#" style="text-decoration: none; color: black">
          <img style="width: 40px;height: 35px; border-bottom-left-radius: 80%;
          border-bottom-right-radius: 80%;
          border-top-left-radius: 80%;
          border-top-right-radius: 80%;"
              src="${user.photoURL}"
              alt="">
          <span>${user.displayName}</span>
          <button onclick="logout()" class="btn btn-danger">Logout</button>
        </a>
        `;
  } else {
    document.querySelector(".form").innerHTML = `
          <a href="login.html" class="btn btn-success">Login&Register</a>

        `;
  }
});
function logout() {
  auth.signOut();
}
