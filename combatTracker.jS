// Orianna Schultz, Or-if , 12/09/2023

function log(i) {
  console.log(i);
}
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
function mechClassification (mechType, mechDisplayPosition) {
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

function applyMechStats () {
  // might be able to set up a loop to instill all the mech information instead of one large block of code??? would replace below
}

function getMech(selector, mechDisplayPosition) {
  const element = document.getElementById(mechDisplayPosition).querySelector(selector);

  return element;
}

function updateMechHtml (selector, mechDisplayPosition, value) {
  getMech(selector, mechDisplayPosition).innerHTML = value;
}

function setMechSkills (mechType, mechDisplayPosition) {
  updateMechHtml(".mechSkills", mechDisplayPosition, "Mech Skills");
  updateMechHtml(".mechHull", mechDisplayPosition, "Hull: " + mechType.hull);
  updateMechHtml(".mechSystems", mechDisplayPosition, "Systems: " + mechType.systems);
  updateMechHtml(".mechAgility", mechDisplayPosition, "Agility: " + mechType.agility);
  updateMechHtml(".mechEngineering", mechDisplayPosition, "Engineering: " + mechType.engineering);
}

function setCoreStats (mechType, mechDisplayPosition) {
  updateMechHtml(".mechCoreStats", mechDisplayPosition, "Mech Skills");
  updateMechHtml(".mechHp", mechDisplayPosition, "Hp: ");
  updateMechHtml(".mechRemainingHealth", mechDisplayPosition, mechType.hp);
  updateMechHtml(".mechArmor", mechDisplayPosition, "Armor: " + mechType.armor);
  updateMechHtml(".mechEvasion", mechDisplayPosition, "Eva: " + mechType.evasion);
  updateMechHtml(".mechEDefense", mechDisplayPosition, "E-Def: " + mechType.edefense);
  updateMechHtml(".mechSpeed", mechDisplayPosition, "Speed: " + mechType.speed);
  updateMechHtml(".mechSize", mechDisplayPosition, "Size: " + mechType.size);
  updateMechHtml(".mechHeatCap", mechDisplayPosition, "H-Cap: " + mechType.heatCap);
  updateMechHtml(".mechSaveTarget", mechDisplayPosition, "Save: " + mechType.saveTarget);
  updateMechHtml(".mechSensors", mechDisplayPosition, "Sensors: " + mechType.sensors);
}

//puts the correct information in the web page, for each relavent stat
function convertMechObjectToPage (mechType, mechDisplayPosition) {
  setMechSkills(mechType, mechDisplayPosition);
  setCoreStats(mechType, mechDisplayPosition);
  // Gear Section
  getMech(".mechBaseGear").innerHTML = "Mech Gear";

  // Weapon Section
  
  //                                                                                 checkAmountOfWeapons(mechType, mechDisplayPosition)

 
  getMech(".mechWeapon01").querySelector(".mechWeaponName").innerHTML = mechType.weapon01.weaponName;
  getMech(".mechWeapon01").querySelector(".mechWeaponPosition").innerHTML = mechType.weapon01.position;
  getMech(".mechWeapon01").querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon01.keywords;
  getMech(".mechWeapon01").querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon01.accuracy;
  getMech(".mechWeapon01").querySelector(".mechWeaponRange").innerHTML = mechType.weapon01.range;
  getMech(".mechWeapon01").querySelector(".mechWeaponDamage").innerHTML = mechType.weapon01.damage;
  getMech(".mechWeapon01").querySelector(".mechWeaponEffect").innerHTML = mechType.weapon01.specialEffect;

  getMech(".mechWeapon02").querySelector(".mechWeaponName").innerHTML = mechType.weapon02.weaponName;
  getMech(".mechWeapon02").querySelector(".mechWeaponPosition").innerHTML = mechType.weapon02.position;
  getMech(".mechWeapon02").querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon02.keywords;
  getMech(".mechWeapon02").querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon02.accuracy;
  getMech(".mechWeapon02").querySelector(".mechWeaponRange").innerHTML = mechType.weapon02.range;
  getMech(".mechWeapon02").querySelector(".mechWeaponDamage").innerHTML = mechType.weapon02.damage;
  getMech(".mechWeapon02").querySelector(".mechWeaponEffect").innerHTML = mechType.weapon02.specialEffect;

  //document.getElementById(mechDisplayPosition).querySelector(`.mechWeapon${weaponNumber}`).querySelector(".mechWeaponName").innerHTML =  mechType.weaponNumber.weaponName;
}

function iterateOverMechThings (mechType, mech) {

}

function checkAmountOfWeapons (mechType, mechDisplayPosition) {
  for (let i = 1; i < 3; i++) {
    if (typeof (mechType[`weapon0${i}.weaponName`]) === "string") {
      const display = document.getElementById(mechDisplayPosition).querySelector(`.mechWeapon0${i}`)
      
    } else {
    }
  }

  if (typeof (mechType.weapon01.weaponName) === "string") {
    console.log(true)
    let display = document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01")

    display.querySelector(".mechWeaponName").innerHTML = mechType.weapon01.weaponName;
    display.querySelector(".mechWeaponPosition").innerHTML = mechType.weapon01.position;
    display.querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon01.keywords;
    display.querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon01.accuracy;
    display.querySelector(".mechWeaponRange").innerHTML = mechType.weapon001.damage;
    display.querySelector(".mechWeaponEffect").innerHTML = mechType.weapon01.range;
    display.querySelector(".mechWeaponDamage").innerHTML = mechType.weapon1.specialEffect;
    // displayWeapon("01", mechType, mechDisplayPosition);
    // if weapon fill out, else cut the paragraph to leave room for next item.
  }
  if (mechType.weapon02.weaponName === String) {
    console.log(true)
    let display = document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02")

    display.querySelector(".mechWeaponName").innerHTML = mechType.weapon02.weaponName;
    display.querySelector(".mechWeaponPosition").innerHTML = mechType.weapon02.position;
    display.querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon02.keywords;
    display.querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon02.accuracy;
    display.querySelector(".mechWeaponRange").innerHTML = mechType.weapon02.range;
    display.querySelector(".mechWeaponDamage").innerHTML = mechType.weapon02.damage;
    display.querySelector(".mechWeaponEffect").innerHTML = mechType.weapon02.specialEffect;

    
    
    // displayWeapon("02", mechType, mechDisplayPosition)
    /* I dont know exactly how nodes work yet but I might be able to clone to save room?
    let clonedWeaponTab = document.getElementById(mechDisplayPosition).querySelector(".mechWeapon").cloneNode(true)
    document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02") = clonedWeaponTab;
    */
  }
}

function displayWeapon(weaponNumber, mechType, mechDisplayPosition) {
  const displayPosition = document.getElementById(mechDisplayPosition).querySelector(`.mechWeapon${weaponNumber}`)
  console.log(weaponNumber)
  weaponNumber = "weapon" + weaponNumber;
  console.log(mechType.weaponNumber)
  displayPosition.querySelector(".mechWeaponName").innerHTML =  mechType.weapon01.weaponName;
  displayPosition.querySelector(".mechWeaponPosition").innerHTML = mechType.weaponNumber.position;
  displayPosition.querySelector(".mechWeaponKeywords").innerHTML = mechType.weaponNumber.keywords;
  displayPosition.querySelector(".mechWeaponAccuracy").innerHTML = mechType.weaponNumber.accuracy;
  displayPosition.querySelector(".mechWeaponRange").innerHTML = mechType.weaponNumber.range;
  displayPosition.querySelector(".mechWeaponDamage").innerHTML = mechType.weaponNumber.damage;
  displayPosition.querySelector(".mechWeaponEffect").innerHTML = mechType.weaponNumber.specialEffect;
}

function reduceHitpoints (mechDisplay) {
  let mechDisplayPosition = "mechDataDisplay" + mechDisplay;
  document.getElementById(mechDisplayPosition).querySelector(".mechRemainingHealth").value -= 1;
}

class WeaponBase {
  constructor(weaponName, position, keywords, accuracy, range, damage, specialEffect) {
    this.weaponName = weaponName;
    this.position = position;
    this.keywords = keywords;
    this.accuracy = accuracy;
    this.range = range;
    this.damage = damage;
    this.specialEffect = specialEffect;
  }
}

class Mech {
  constructor(mechName, mechType, hull, systems, agility, engineering, hp, armor, evasion, edefense, speed, size, heatCap, saveTarget, sensors, weaponName01, position01, keywords01, accuracy01, range01, damage01, specialEffect01, weaponName02, position02, keywords02, accuracy02, range02, damage02, specialEffect02) {
    this.mechName = mechName;
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
    this.weapon01 = new WeaponBase(weaponName01, position01, keywords01, accuracy01, range01, damage01, specialEffect01);
    this.weapon02 = new WeaponBase(weaponName02, position02, keywords02, accuracy02, range02, damage02, specialEffect02);
  }
}

assaultMech = new Mech("Assault01", "assault", "+1", "+1", "+1", "+1", 15, 1, 8, 8, 4, 1, 8, 10, 8, "Assault rifle", "Main Rifle,", "Reliable 2,", "+1", 10, 4, "", "Combat Knife", "Aux Melee", "", "+1", 1, 4, "")
assasinMech = new Mech("Assasin01", "assasin", "+0", "+1", "+2", "-1", 15, 0, 12, 8, 6, "1/2 or 1", 7, 10, 10)


// holding for later document.getElementById("mechDataDisplay" + displaySpot).innerHTML