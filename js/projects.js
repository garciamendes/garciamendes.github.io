const btnCodar = document.querySelector("#codar")
const btnAmazing = document.querySelector("#amazing")

function ToPageProjects(params) {
  let Ispage = params

  if (Ispage === "codar") {
    btnCodar = window.location.href = "../projects/codar/codar.html"
  } else if (Ispage === "amazing") {
    btnAmazing = window.location.href = "../projects/AmazingGraph/amazing.html"
  }
}