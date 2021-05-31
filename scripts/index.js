///////////////// opcion pc ///////////////////////////
// 1 = piedra
// 2 = papel
// 3 = tijera


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
  resultAnimationOn();
  const pcResult = pc(minimo, maximo); 
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    showPiedra(),showTie()
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    showPapel(),showLose()
  }
  else {return console.log("pc elige tijera"),
    showTijera(),showWon()};
}

const playerOptionPapel = () => {  
  resultAnimationOn();
  const pcResult = pc(minimo, maximo); 
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    showPiedra(),showWon()    
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    showPapel(),showTie()
  }
  else {return console.log("pc elige tijera"),
    showTijera(),showLose()};
}

const playerOptionTijera = () => {  
  resultAnimationOn();
  const pcResult = pc(minimo, maximo); 
  if (pcResult == 1) {
    return console.log("pc elige piedra"),
    showPiedra(),showLose()
  }
  else if (pcResult == 2) {
    return console.log("pc elige papel"),
    showPapel(),showWon()
  }
  else {return console.log("pc elige tijera"),
    showTijera(),showTie()};
}

////////////////////////////// botones de opciones /////////////////////////////////////////

const piedra = document.getElementById('Piedra')
const papel = document.getElementById('Papel')
const tijera = document.getElementById('Tijera')

piedra.addEventListener('click',() =>{
  if (pcOptionGlass.style.animationName !="fadeOutGlass"){
    playerOptionPiedra(), 
    colorTurnOn(piedra), 
    // modalOn()
    setTimeout(() => {modalOn()  
    }, 3000);
  } 
  else {}
})
papel.addEventListener('click', () => {
  if (pcOptionGlass.style.animationName !="fadeOutGlass"){
    playerOptionPapel(), 
    colorTurnOn(papel), 
    // modalOn()
    setTimeout(() => {modalOn()  
    }, 3000);
  } 
  else {} 
})
tijera.addEventListener('click', () => {
  if (pcOptionGlass.style.animationName !="fadeOutGlass"){
    playerOptionTijera(), 
    colorTurnOn(tijera), 
    // modalOn()
    setTimeout(() => {modalOn()  
    }, 3000);
  } 
  else {}  
})

const colorTurnOn = (a) => {
  a.style.color ="#5cc5a6";
  a.style.border ="solid 1px #428f78c9";
}

////////////////////////////// reset modal //////////////////////////////

const resetModal = document.getElementById('resetModal')



const modalOn = () => {
  resetModal.style.display = "flex"
}

const modalOff = () => {
  resetModal.style.display = "none"
}




const colorTurnOff = () => {
  piedra.style.color ="#151727b9";
  piedra.style.border ="solid 1px #151727b9";
  papel.style.color ="#151727b9";
  papel.style.border ="solid 1px #151727b9";
  tijera.style.color ="#151727b9";
  tijera.style.border ="solid 1px #151727b9";
}

resetModal.addEventListener('click',() => {
    modalOff(), 
    resultAnimationOff(), 
    showChoose(),
    colorTurnOff()
  })

// resetModal.addEventListener('click',() => {
//   setTimeout(() => {
//     modalOff()}, 2000), 
//     resultAnimationOff(), 
//     showChoose(),
//     colorTurnOff()
//   })

// resetModal.addEventListener('click',() => {
//     resultAnimationOff(), 
//     showChoose(),
//     colorTurnOff()
//     if (choose.style.display = "flex"){modalOff()}
//     else{}
//   })

// resetModal.addEventListener('click',() => {
//     if (pcOptionGlass.style.opacity = "0"){
//       modalOff()}
//     else{}
//     resultAnimationOff(), 
//     showChoose(),
//     colorTurnOff()
//   })

///////////////////////////// resultado mostrado PC ///////////////////////////

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



const showChoose = () => {
  choose.style.display = "flex",
  won.style.display = "none",
  tie.style.display = "none",
  lose.style.display = "none"
}
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


/////////////////////////////// animar opción pc /////////////////////////////////////

const pcOptionGlass = document.getElementById('pcOptionGlass')


const resultAnimationOn = () => {
  pcOptionGlass.style.animation= "fadeOutGlass 3s forwards"

}
const resultAnimationOff = () => {
  pcOptionGlass.style.animation= "fadeInGlass 1s"
}

//////////////////////////// animar resultado //////////////////////////////




