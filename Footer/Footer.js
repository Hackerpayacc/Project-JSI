function importCss(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
importCss("./Footer/Darkmode.css");
importCss("./Footer/Footer.css");
document.addEventListener("DOMContentLoaded", renderHeader);
function renderHeader() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
  <div id="main-footer-container">
        <div class="Support">
          <a class="Top-sentence">Help</a>
          <a class="link-support">Help center</a>
          <a class="link-support">FAQs</a>
          <a class="link-support">How to use</a>
          <a class="link-support">Cookie policy</a>
        </div>
        <div class="Support">
          <a class="Top-sentence">Company</a>
          <a class="link-support">About us</a>
        </div>
        <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.378165757962!2d-1.0836148242610397!3d52.59893503038361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877641c5bfa4b69%3A0xf0fd7c3d91a0a1c0!2s15%20Church%20St%2C%20Oadby%2C%20Leicester%20LE2%205DB%2C%20V%C6%B0%C6%A1ng%20Qu%E1%BB%91c%20Anh!5e0!3m2!1svi!2s!4v1717301106842!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div id="Darkmode">
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label for="checkbox" class="checkbox-label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <span class="ball"></span>
        </label>
        </div>`;
  document.body.appendChild(footer);
  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.appendChild(footer);
  });
}
