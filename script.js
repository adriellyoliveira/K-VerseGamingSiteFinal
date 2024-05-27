document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-bottom .link2");

  navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const grupo = this.textContent.trim();
          filterProducts(grupo);
      });
  });

  function filterProducts(grupo) {
      const rows = document.querySelectorAll(".products .row");
      rows.forEach((row) => {
          const dataGrupo = row.getAttribute("data-grupo");
          if (dataGrupo === grupo || grupo === "Todos") {
              row.style.display = "grid";
          } else {
              row.style.display = "none";
          }
      });
  }
});
/**FIM DA FILTRAGEM */


/**CARROSSEL */

let count = 1; // Inicialize a contagem antes de iniciar o intervalo

function nextImage() {
    count++;
    if (count > 3) { // Ajuste o limite de contagem se você tiver 5 slides
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

// Inicie o intervalo após definir a função nextImage()
setInterval(nextImage, 4000); // Chame nextImage sem uma função anônima
/**FIM DO CARROSSEL */


/**COMEÇO DA SETINHA NOS PRODUTOS */
function toggleArrow() {
  var arrow = document.getElementById("arrow");
  var dropdown = document.querySelector(".dropdown");
  var dropdownStyle = window.getComputedStyle(dropdown);

  if (dropdownStyle.display === "block") {
      dropdown.style.display = "none";
      arrow.innerHTML = "&#9662;"; // Define a seta para baixo quando o menu está fechado
  } else {
      dropdown.style.display = "block";
      arrow.innerHTML = "&#9652;"; // Define a seta para cima quando o menu está aberto
  }
}
/**FIM DA SETINHA NOS PRODUTOS */

/**Login */

const container = document.querySelector('.container');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});


loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});













