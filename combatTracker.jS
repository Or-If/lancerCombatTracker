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
  // this will go through every stat item in the object and put it ont the page                              !!!!! ADD All OF THEM !!!!!
  document.getElementById(mechDisplayPosition).querySelector(".mechName").innerHTML = mechType.mechName;
  //document.getElementById(mechDisplayPosition).querySelector(".mechType").innerHTML = "Mech Type: " + mechType.type;
 
  // Mech Skills Section
  document.getElementById(mechDisplayPosition).querySelector(".mechSkills").innerHTML = "Mech Skills";
  document.getElementById(mechDisplayPosition).querySelector(".mechHull").innerHTML = "Hull: " + mechType.hull; 
  document.getElementById(mechDisplayPosition).querySelector(".mechSystems").innerHTML = "Systems: " + mechType.systems; 
  document.getElementById(mechDisplayPosition).querySelector(".mechAgility").innerHTML = "Agility: " + mechType.agility; 
  document.getElementById(mechDisplayPosition).querySelector(".mechEngineering").innerHTML = "Engineering: " + mechType.engineering; 

  // Core Stats Section
  document.getElementById(mechDisplayPosition).querySelector(".mechCoreStats").innerHTML = "Core Stats";
  document.getElementById(mechDisplayPosition).querySelector(".mechHp").innerHTML = "Hp: "+ mechType.hp;
  document.getElementById(mechDisplayPosition).querySelector(".mechArmor").innerHTML = "Armor: " + mechType.armor;
  document.getElementById(mechDisplayPosition).querySelector(".mechEvasion").innerHTML = "Eva: " + mechType.evasion;
  document.getElementById(mechDisplayPosition).querySelector(".mechEDefense").innerHTML = "E-Def: " + mechType.edefense;
  document.getElementById(mechDisplayPosition).querySelector(".mechSpeed").innerHTML = "Speed: " + mechType.speed;
  document.getElementById(mechDisplayPosition).querySelector(".mechSize").innerHTML = "Size: " + mechType.size;
  document.getElementById(mechDisplayPosition).querySelector(".mechHeatCap").innerHTML = "H-Cap: " + mechType.heatCap;
  document.getElementById(mechDisplayPosition).querySelector(".mechSaveTarget").innerHTML = "Save: " + mechType.saveTarget;
  document.getElementById(mechDisplayPosition).querySelector(".mechSensors").innerHTML = "Sensors: " + mechType.sensors;

  // Gear Section
  document.getElementById(mechDisplayPosition).querySelector(".mechBaseGear").innerHTML = "Mech Gear";

  // Weapon Section
  document.getElementById(mechDisplayPosition).querySelector(".mechWeaponName").innerHTML = mechType.weapon.weaponName;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeaponPosition").innerHTML = mechType.weapon.position;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon.keywords;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon.accuracy;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeaponRange").innerHTML = mechType.weapon.range;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeaponDamage").innerHTML = mechType.weapon.damage;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeaponEffect").innerHTML = mechType.weapon.specialEffect;

}

function weaponBase(weaponName, position, keywords, accuracy, range, damage, specialEffect) {
  this.weaponName = weaponName;
  this.position = position;
  this.keywords = keywords;
  this.accuracy = accuracy;
  this.range = range;
  this.damage = damage;
  this.specialEffect = specialEffect;
}

//a basic object constructor that every mech is build off of
function mech(mechName, mechType, hull, systems, agility, engineering, hp, armor, evasion, edefense, speed, size, heatCap, saveTarget, sensors, weaponName, position, keywords, accuracy, range, damage, specialEffect) {
  this.mechName = mechName
  this.type = mechType;
  this.hull = hull;
  this.systems = systems;
  this.agility = agility;
  this.engineering = engineering;
  this.hp = hp;
  this.armor = armor;
  this.evasion = evasion;
  this.edefense = edefense;
  this.speed = speed;
  this.size = size;
  this.heatCap = heatCap;
  this.saveTarget = saveTarget;
  this.sensors = sensors;
  this.weapon = new weaponBase(weaponName, position, keywords, accuracy, range, damage, specialEffect)
}

assaultMech = new mech("Assault01", "assault", "+1", "+1", "+1", "+1", 15, 1, 8, 8, 4, 1, 8, 10, 8, "Assault rifle", "Main Rifle,", "Reliable 2,", "+1", 10, 4, "")
assasinMech = new mech("Assasin01", "assasin", "+0", "+1", "+2", "-1", 15, 0, 12, 8, 6, "1/2 or 1", 7, 10, 10)



// holding for later document.getElementById("mechDataDisplay" + displaySpot).innerHTML