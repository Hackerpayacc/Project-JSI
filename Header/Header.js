function importCss(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

importCss("./Header/Header.css");
function renderHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
  <div class="navbar">
  <img id="img" src="./PEDRO (100 x 100 px).svg" alt="" />
  <div class="subnav">
  <a href="index.html">Trang chủ</a>
  <a href="trangphucnam.html">Trang phục nam</a>
  <a href="trangphucnu.html">Trang phục nữ</a>
  <a href="dochoi.html">Đồ chơi trẻ em</a>
  <a href="thethaodulic.html">Thể thao & du lịch</a>
  </div>
  <div class="form">
  </div>
  <a href="cart.html" class="cart-link">
  <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
  <div id="cartAmount" class="cartAmount">0</div>
  </a>
    </div>`;
  document.body.appendChild(header);
}
renderHeader();
