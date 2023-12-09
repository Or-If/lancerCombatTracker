// Orianna Schultz, 12/09/2023


function setCorrectDisplay (displaySpot) {
  mechInputType = "mechSelection" + displaySpot
  mechOutputInformation = "mechDataDisplay" + displaySpot
  document.getElementById(mechOutputInformation).innerHTML = document.getElementById(mechInputType).value
  
  inputDisplayInformation(mechOutputInformation);
}

function inputDisplayInformation (mechOutputInformation) {
  console.log(document.getElementById(mechOutputInformation).innerHTML)
  if (document.getElementById(mechOutputInformation).innerHTML==="Assault") {
    document.getElementById(mechOutputInformation).innerHTML = assaultMech;
  }
}

assaultMech = {
  name: "assault01",
  hp: 18
}