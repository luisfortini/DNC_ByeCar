let list = document.querySelectorAll("ul li")
let index = 0

let modal = document.getElementById('modal')
let detTitle = document.getElementById('title')
let detDesc = document.getElementById('desc')
let detImg = document.getElementById('image')

hideDetalhes()

const dadosMoto = [
  {
    index:0,
    title:"Scooter Elétrica Voltz EV1",
    src:"./assets/img-card-1.png",
    desc:"O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"
  },
  {
    index:1,
    title:"Honda CB 500X",
    src:"./assets/img-card-2.png",
    desc:"O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"

  }
]

function show(moviment){
index = index + moviment
index = Math.min(Math.max(index,0 ),(list.length-1))
list[index].scrollIntoView({ behavior: "smooth" })
}

setInterval(() => {
  if (index==0){
    show(+1)
  } else{
    show(-1)
  }
}, 5000);

function showDetalhes(){

  detTitle.innerHTML = dadosMoto[index].title
  detDesc.innerHTML = dadosMoto[index].desc
  detImg.src = dadosMoto[index].src
  modal.style.visibility = "visible"
  modal.showModal()

}

function hideDetalhes(){
  modal.style.visibility = "hidden"
  modal.close()
}

document.onkeydown = function(e) {
  if(e.key === 'Escape') {
      hideDetalhes()
  }
}