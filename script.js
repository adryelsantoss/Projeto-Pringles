gsap.registerPlugin(SplitText);

// PRIMEIRA COISA -> MAPEAR AS COISAS Q SERÃO INTERATIVAS
const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");
const slides = document.querySelectorAll(".slide");

// SEGMENTAR, ESPECIFICAR OS ELEMENTOS DEM UM GRUPO -> TORNAR INDIVIDUAL = forEach

// CONTADOR
let contador = 0;

let clicar = true;
// TRUE -> PODE CLICAR
// FALSE -> NÃO PODE CLICAR

latasMenores.forEach((lataMenor) => {

  lataMenor.onclick = () => {
   console.log(clicar)

    if (clicar) {
       clicar = false;
       console.log(clicar)
      const slideAtivo = document.querySelector(".slide.ativo");
      slideAtivo.classList.remove("ativo");
      if (contador == 3) {
        contador = 0;
      } else {
        contador = contador + 1;
      }

      slides[contador].classList.add("ativo");
      animarTitulo();

      setTimeout(()=>{
        clicar= true
      }, 1000)
    }
  };

});

function animarTitulo() {
  const split = SplitText.create(".slide.ativo h2", {
    type: "chars",
    mask: "chars",
  });

  console.log(split);

  gsap.from(split.chars, {
    y: "100%",
    duration: 0.5,
    stagger: 0.06,
    delay: 0.5,
  });
}
