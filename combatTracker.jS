// Or-if , 12/09/2023


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
  document.getElementById(mechDisplayPosition).querySelector(".mechSkills").innerHTML = "Mech Skills";
  document.getElementById(mechDisplayPosition).querySelector(".mechCoreStats").innerHTML = "Core Stats";


  document.getElementById(mechDisplayPosition).querySelector(".mechHp").innerHTML = "Hp: "+ mechType.hp;
  //document.getElementById(mechDisplayPosition).querySelector(".mechHpInfo").innerHTML = mechType.hp;

  document.getElementById(mechDisplayPosition).querySelector(".mechArmor").innerHTML = "Armor: " + mechType.armor;
  //document.getElementById(mechDisplayPosition).querySelector(".mechArmorInfo").innerHTML = mechType.armor;

  document.getElementById(mechDisplayPosition).querySelector(".mechEvasion").innerHTML = "Evasion: " + mechType.evasion;
  //document.getElementById(mechDisplayPosition).querySelector(".mechEvasionInfo").innerHTML = mechType.evasion;

  document.getElementById(mechDisplayPosition).querySelector(".mechEDefense").innerHTML = "E-Defense: " + mechType.edefense;
  //document.getElementById(mechDisplayPosition).querySelector(".mechEDefenseInfo").innerHTML = mechType.edefense;

  document.getElementById(mechDisplayPosition).querySelector(".mechSpeed").innerHTML = "Speed: " + mechType.speed;
  //document.getElementById(mechDisplayPosition).querySelector(".mechSpeedInfo").innerHTML = mechType.speed;

  document.getElementById(mechDisplayPosition).querySelector(".mechSize").innerHTML = "Size: " + mechType.size;
  //document.getElementById(mechDisplayPosition).querySelector(".mechSizeInfo").innerHTML = mechType.size;

  document.getElementById(mechDisplayPosition).querySelector(".mechHeatCap").innerHTML = "Heat Cap: " + mechType.heatCap;
  //document.getElementById(mechDisplayPosition).querySelector(".mechHeatCapInfo").innerHTML = mechType.heatCap;

  document.getElementById(mechDisplayPosition).querySelector(".mechSaveTarget").innerHTML = "Save Target: " + mechType.saveTarget;
  //document.getElementById(mechDisplayPosition).querySelector(".mechSaveTargetInfo").innerHTML = mechType.saveTarget;

  document.getElementById(mechDisplayPosition).querySelector(".mechSensors").innerHTML = "Sensors: " + mechType.sensors;
  //document.getElementById(mechDisplayPosition).querySelector(".mechSensorsInfo").innerHTML = mechType.sensors;
}

//a basic object constructor that every mech is build off of
function mech(mechName, mechType, hp, armor, evasion, edefense, speed, size, heatCap, saveTarget, sensors) {
  this.mechName = mechName
  this.type = mechType;
  this.hp = hp;
  this.armor = armor;
  this.evasion = evasion;
  this.edefense = edefense;
  this.speed = speed;
  this.size = size;
  this.heatCap = heatCap;
  this.saveTarget = saveTarget;
  this.sensors = sensors;
}

assaultMech = new mech("Assault01", "assault", 15, 1, 8, 8, 4, 1, 8, 10, 8)
assasinMech = new mech("Assasin01", "assasin", 15, 0, 12, 8, 6, "1/2 or 1", 7, 10, 10)



// holding for later document.getElementById("mechDataDisplay" + displaySpot).innerHTML