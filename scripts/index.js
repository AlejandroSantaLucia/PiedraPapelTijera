///////////////// opcion pc ///////////////////////////

let minimo = 1
let maximo = 3  
const pc = (minimo, maximo) => {
  let possibilities = maximo - minimo;
  let pcNumber = Math.random() * (possibilities + 1);
  pcNumber =  Math.floor(pcNumber)  
  return minimo + pcNumber      
}

const pcOption = () => {  
  const pcResult = pc(minimo, maximo); 
  console.log(pcResult)

  if (pcResult == 1) {
    return console.log("pc elige piedra")
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel")
  }
  else {return console.log("pc elige tijera")}
}

/////////////////// Respuesta pc /////////////////////////////////////

const playerOptionPiedra = () => {  
  const pcResult = pc(minimo, maximo); 
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    console.log("EMPATE"),
    showPiedra(),showTie()
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    console.log("PERDISTE"),
    showPapel(),showLose()
  }
  else {return console.log("pc elige tijera"),
  console.log("GANASTE"),
  showTijera(),showWon()}
}

const playerOptionPapel = () => {  
  const pcResult = pc(minimo, maximo); 
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    console.log("GANASTE"),
    showPiedra(),showWon()    
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    console.log("EMPATE"),
    showPapel(),showTie()
  }
  else {return console.log("pc elige tijera"),
  console.log("PERDISTE"),
  showTijera(),showLose()}
}

const playerOptionTijera = () => {  
  const pcResult = pc(minimo, maximo); 
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    console.log("PERDISTE"),
    showPiedra(),showWon()
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    console.log("GANASTE"),
    showPapel(),showLose()
  }
  else {return console.log("pc elige tijera"),
  console.log("EMPATE"),
  showTijera(),showTie()}
}

////////////////////////////// botones de opciones /////////////////////////////////////////

const piedra = document.getElementById('Piedra')
const papel = document.getElementById('Papel')
const tijera = document.getElementById('Tijera')

piedra.addEventListener('click',() =>{playerOptionPiedra()  
})
papel.addEventListener('click', () => {playerOptionPapel()  
})
tijera.addEventListener('click', () => {playerOptionTijera()  
})

/////////////////////// resultado mostrado PC ////////////////////

const startPcOption = document.getElementById('startPcOption')
const pcPiedra = document.getElementById('pcPiedra')
const pcPapel = document.getElementById('pcPapel')
const pcTijera = document.getElementById('pcTijera')

const showPiedra = () => {
  startPcOption.style.display = "none",
  pcPiedra.style.display = "flex",
  pcPapel.style.display = "none",
  pcTijera.style.display = "none"
}
const showPapel = () => {
  startPcOption.style.display = "none",
  pcPiedra.style.display = "none",
  pcPapel.style.display = "flex",
  pcTijera.style.display = "none"
}
const showTijera = () => {
  startPcOption.style.display = "none",
  pcPiedra.style.display = "none",
  pcPapel.style.display = "none",
  pcTijera.style.display = "flex"
}

/////////////////////////// mostrar resultado choque //////////////////////////////////////

const choose = document.getElementById('choose')
const won = document.getElementById('won')
const tie = document.getElementById('tie')
const lose = document.getElementById('lose')

const showWon = () => {
  choose.style.display = "none",
  won.style.display = "flex",
  tie.style.display = "none",
  lose.style.display = "none"
}
const showTie = () => {
  choose.style.display = "none",
  won.style.display = "none",
  tie.style.display = "flex",
  lose.style.display = "none"
}
const showLose = () => {
  choose.style.display = "none",
  won.style.display = "none",
  tie.style.display = "none",
  lose.style.display = "flex"
}