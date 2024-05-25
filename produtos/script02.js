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
    if (count > 4) { // Ajuste o limite de contagem se você tiver 5 slides
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



document.addEventListener("DOMContentLoaded", function() {
    const colors = document.querySelectorAll('.color');
    const productImage = document.querySelector('.col-2 img');
    const colorImageMap = {
        'preta02': 'imagens02/moletomnewjeansblack.png',
        'azulclaro': 'imagens02/moletomnewjeansblueligth.png',
        'rosa': 'imagens02/moletomnewjeanspink.png',
        'amarelo': 'imagens02/moletomnewjeansyellow.png'
        // Adicione outros mapeamentos de cores conforme necessário
    };

    colors.forEach(color => {
        color.addEventListener('click', function() {
            const selectedColor = this.getAttribute('data-cor');
            if (colorImageMap[selectedColor]) {
                productImage.src = colorImageMap[selectedColor];
            } else {
                console.error(`Nenhuma imagem encontrada para a cor: ${selectedColor}`);
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const colors = document.querySelectorAll('.color');
    const productImage = document.querySelector('.col-2 img');
    const colorImageMap = {
        'preta': 'imagens02/camisetalispreta.png',
        'branca': 'imagens02/camisetalisbranca.png',
        'indigo': 'imagens02/camisetalisaindigo.png',
        'bege': 'imagens02/camisetalisbege.png'
        // Adicione outros mapeamentos de cores conforme necessário
    };

    colors.forEach(color => {
        color.addEventListener('click', function() {
            const selectedColor = this.getAttribute('data-cor');
            if (colorImageMap[selectedColor]) {
                productImage.src = colorImageMap[selectedColor];
            } else {
                console.error(`Nenhuma imagem encontrada para a cor: ${selectedColor}`);
            }
        });
    });
});



