genderPost();
async function genderPost() {
  try {
    const querySnapshot = await db.collection("Sanpham").get();
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    posts.forEach((Sanpham) => {
      document.querySelector(
        "#second-container"
      ).innerHTML += `<a href="Detail.html?key=${Sanpham.id}" class="Sanpham-item">
      <div class="content">
        <div class="up-content">
            <img class="img-product" src="${Sanpham.imgurl}" alt="" />
        </div>
      <div class="down-content">
        <p class="name-product">${Sanpham.name}</p>
        <p class="price"><del>${Sanpham.pricebefore}</del><ins>${Sanpham.priceafter}</ins></p>
      </div>
      <div class="addtocart">
      <i class="fa-solid fa-cart-plus" onclick="increasement(${Sanpham.id}"></i>
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
          <a href="./components/login.html" class="btn btn-success">Login</a>
          <a href="./components/register.html" class="btn btn-primary">Register</a>
        `;
  }
});
function logout() {
  auth.signOut();
}

renderPost();
async function renderPost() {
  try {
    const querySnapshot = await db.collection("Sanpham").doc(value).get();
    const Sanpham = querySnapshot.data();

    document.querySelector("#product").innerHTML += `
      <div class="post-container">
          <img class="img-product" src="${Sanpham.imgurl}" alt="" />
         <div class="content-detail"> 
          <p class="content-sub">${Sanpham.name}</p><br>
          <p class="content-sub-detail">${Sanpham.detail}</p><br>
          <p class="price">${Sanpham.priceafter}</p>
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
//     const productRef = db.collection("Sanpham").doc(value);
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
