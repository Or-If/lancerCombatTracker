// Orianna Schultz, 12/09/2023


//this is a function that is called by every input change to make sure the correct input is changing the correct div info
function setCorrectDisplay (displaySpot) {
  mechDisplayPosition = "mechDataDisplay" + displaySpot
  //if user selects the blank spot I want it to all disappear           !!!!! Currently this breaks the program if you try and apply another option after this!!!!
  mechType = document.getElementById("mechSelection" + displaySpot).value
  if (mechType==="blank") {
    document.getElementById(mechDisplayPosition).innerHTML = ""
    return;
  }
  mechClassification(mechType, mechDisplayPosition);
}

//assigns the mechType to the correct corresponding mech object
function mechClassification (mechType , mechDisplayPosition) {
  //this will encompasse all hardcoded mechs                                      !!!! STILL NEED TO ADD !!!!!!
  switch(mechType) {
    case "assault":
      mechType = assaultMech
      break;
    case "assasin":
      mechType = assasinMech
      break;
  }
  convertMechObjectToPage(mechType, mechDisplayPosition)
}

//puts the correct information in the web page, for each relavent stat
function convertMechObjectToPage (mechType, mechDisplayPosition) {
  // this will go through every stat item in th eobject and put it ont the page                              !!!!! ADD All OF THEM !!!!!
  document.getElementById(mechDisplayPosition).querySelector(".mechName").innerHTML = mechType.mechName;
  document.getElementById(mechDisplayPosition).querySelector(".mechType").innerHTML = "Mech Type:";
  document.getElementById(mechDisplayPosition).querySelector(".mechTypeInfo").innerHTML = mechType.type;
  document.getElementById(mechDisplayPosition).querySelector(".mechHp").innerHTML = "Hp:";
  document.getElementById(mechDisplayPosition).querySelector(".mechHpInfo").innerHTML = mechType.hp;
  document.getElementById(mechDisplayPosition).querySelector(".mechEvasion").innerHTML = "Evasion:";
  document.getElementById(mechDisplayPosition).querySelector(".mechEvasionInfo").innerHTML = mechType.evasion;
}

//a basic object constructor that every mech is build off of
function mech(mechName, mechType, hp, evasion) {
  this.mechName = mechName
  this.type = mechType;
  this.hp = hp;
  this.evasion = evasion;
}

assaultMech = new mech("Assault01", "assault", 18, 8)
assasinMech = new mech("Assasin01", "assasin", 10, 13)



// holding for later document.getElementById("mechDataDisplay" + displaySpot).innerHTML