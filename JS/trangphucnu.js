genderPost();
async function genderPost() {
  try {
    const querySnapshot = await db.collection("Trangphucnu").get();
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    posts.forEach((Trangphucnu) => {
      document.querySelector(
        "#second-container"
      ).innerHTML += `<a href="Detail.html?key=${Trangphucnu.id}" class="Trangphucnu-item">
      <div class="content">
        <div class="up-content">
            <img class="img-product" src="${Trangphucnu.imgurl}" alt="" />
        </div>
      <div class="down-content">
        <p class="name-product">${Trangphucnu.name}</p>
        <p class="price"><del>${Trangphucnu.pricebefore}</del><ins>${Trangphucnu.priceafter}</ins></p>
      </div>
      <div class="addtocart">
      <i class="fa-solid fa-cart-plus" onclick="increasement(${Trangphucnu.id}"></i>
      </div>
      </div>
      </a>`;
    });
  } catch (err) {
    console.log(err);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get("key");

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

renderPost();
async function renderPost() {
  try {
    const querySnapshot = await db.collection("Trangphucnu").doc(value).get();
    const Trangphucnu = querySnapshot.data();

    document.querySelector("#product").innerHTML += `
      <div class="post-container">
          <img class="img-product" src="${Trangphucnu.imgurl}" alt="" />
         <div class="content-detail"> 
          <p class="content-sub">${Trangphucnu.name}</p><br>
          <p class="content-sub-detail">${Trangphucnu.detail}</p><br>
          <p class="price">${Trangphucnu.priceafter}</p>
         </div>
      </div>
      `;
  } catch (err) {
    console.log(err);
  }
}
// Hàm để thêm sản phẩm vào giỏ hàng
// async function increasement() {
//   try {
//     // Lấy dữ liệu sản phẩm từ Firestore
//     const productRef = db.collection("Trangphucnu").doc(value);
//     const productDoc = await productRef.get();

//     if (!productDoc.exists) {
//       console.log("No such product!");
//       return;
//     }

//     const productData = productDoc.data();

//     // Lưu sản phẩm vào giỏ hàng (ở đây sử dụng localStorage)
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push({ id: value, ...productData });

//     localStorage.setItem("cart", JSON.stringify(cart));

//     console.log("Product added to cart:", productData);
//   } catch (error) {
//     console.error("Error adding product to cart:", error);
//   }
// }

// // Sử dụng hàm addToCart
// increasement();

function submit() {
  const thanhpho = document.getElementById("tinh").value;
  const quan = document.getElementById("quan").value;
  const phuong = document.getElementById("phuong").value;
  const name = document.getElementById("name").value;
  const sdt = document.getElementById("sdt").value;

  if (
    thanhpho === "" ||
    quan === "" ||
    phuong === "" ||
    name === "" ||
    sdt === ""
  ) {
    alert("Cần nhập đủ thông tin");
  } else {
    alert(
      "Nhập thông tin thành công, đơn hàng của bạn sẽ được giao khi nào web này có tài trợ"
    );
  }
}
