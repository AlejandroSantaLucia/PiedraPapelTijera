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
const pcOptionPiedra = () => {  
  const pcResult = pc(minimo, maximo); 
  // console.log(pcResult)
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    console.log("EMPATE")
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    console.log("PERDISTE")
  }
  else {return console.log("pc elige tijera"),
  console.log("GANASTE")}
}

const pcOptionPapel = () => {  
  const pcResult = pc(minimo, maximo); 
  // console.log(pcResult)
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    console.log("GANASTE")
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    console.log("EMPATE")
  }
  else {return console.log("pc elige tijera"),
  console.log("PERDISTE")}
}

const pcOptionTijera = () => {  
  const pcResult = pc(minimo, maximo); 
  // console.log(pcResult)
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    console.log("EMPATE")
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    console.log("PERDISTE")
  }
  else {return console.log("pc elige tijera"),
  console.log("EMPATE")}
}







// const buttonPrueba = document.getElementById('ButtonPrueba')

// buttonPrueba.addEventListener('click', () => pcOption())



////////////////////////////// botones de opciones /////////////////////////////////////////


const piedra = document.getElementById('Piedra')
const papel = document.getElementById('Papel')
const tijera = document.getElementById('Tijera')

piedra.addEventListener('click',() =>{pcOptionPiedra()  
})
papel.addEventListener('click', () => {pcOptionPiedra()  
})
tijera.addEventListener('click', () => {pcOptionPiedra()  
})


