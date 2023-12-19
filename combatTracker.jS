// Orianna Schultz, Or-if , 12/09/2023


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

function applyMechStats () {
  // might be able to set up a loop to instill all the mech information instead of one large block of code??? would replace below
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
  document.getElementById(mechDisplayPosition).querySelector(".mechHp").innerHTML = "Hp: ";
  document.getElementById(mechDisplayPosition).querySelector(".mechRemainingHealth").value = mechType.hp;
  document.getElementById(mechDisplayPosition).querySelector(".mechArmor").innerHTML = "Armor: " + mechType.armor;
  document.getElementById(mechDisplayPosition).querySelector(".mechEvasion").innerHTML = "Eva: " + mechType.evasion;
  document.getElementById(mechDisplayPosition).querySelector(".mechEDefense").innerHTML = "E-Def: " + mechType.edefense;
  document.getElementById(mechDisplayPosition).querySelector(".mechSpeed").innerHTML = "Speed: " + mechType.speed;
  document.getElementById(mechDisplayPosition).querySelector(".mechSize").innerHTML = "Size: " + mechType.size;
  document.getElementById(mechDisplayPosition).querySelector(".mechHeatCap").innerHTML = "H-Cap: " + mechType.heatCap;
  document.getElementById(mechDisplayPosition).querySelector(".mechSaveTarget").innerHTML = "Save: " + mechType.saveTarget;
  document.getElementById(mechDisplayPosition).querySelector(".mechSensors").innerHTML = "Sensors: " + mechType.sensors;


  //         Might make a loop that looks like this for this section                (`.mech${___}`).innerHTML = "" + ___ + ": " + mechType.___ 

  // Gear Section
  document.getElementById(mechDisplayPosition).querySelector(".mechBaseGear").innerHTML = "Mech Gear";

  // Weapon Section
  
  //                                                                                 checkAmountOfWeapons(mechType, mechDisplayPosition)

  
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01").querySelector(".mechWeaponName").innerHTML = mechType.weapon01.weaponName;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01").querySelector(".mechWeaponPosition").innerHTML = mechType.weapon01.position;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01").querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon01.keywords;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01").querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon01.accuracy;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01").querySelector(".mechWeaponRange").innerHTML = mechType.weapon01.range;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01").querySelector(".mechWeaponDamage").innerHTML = mechType.weapon01.damage;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01").querySelector(".mechWeaponEffect").innerHTML = mechType.weapon01.specialEffect;

  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02").querySelector(".mechWeaponName").innerHTML = mechType.weapon02.weaponName;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02").querySelector(".mechWeaponPosition").innerHTML = mechType.weapon02.position;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02").querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon02.keywords;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02").querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon02.accuracy;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02").querySelector(".mechWeaponRange").innerHTML = mechType.weapon02.range;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02").querySelector(".mechWeaponDamage").innerHTML = mechType.weapon02.damage;
  document.getElementById(mechDisplayPosition).querySelector(".mechWeapon02").querySelector(".mechWeaponEffect").innerHTML = mechType.weapon02.specialEffect;

  //document.getElementById(mechDisplayPosition).querySelector(`.mechWeapon${weaponNumber}`).querySelector(".mechWeaponName").innerHTML =  mechType.weaponNumber.weaponName;



}

function checkAmountOfWeapons (mechType, mechDisplayPosition) {
  if (mechType.weapon01.weaponName = String) {
    console.log(true)
    let display = document.getElementById(mechDisplayPosition).querySelector(".mechWeapon01")

    display.querySelector(".mechWeaponName").innerHTML = mechType.weapon01.weaponName;
    display.querySelector(".mechWeaponPosition").innerHTML = mechType.weapon01.position;
    display.querySelector(".mechWeaponKeywords").innerHTML = mechType.weapon01.keywords;
    display.querySelector(".mechWeaponAccuracy").innerHTML = mechType.weapon01.accuracy;
    display.querySelector(".mechWeaponRange").innerHTML = mechType.weapon01.range;
    display.querySelector(".mechWeaponDamage").innerHTML = mechType.weapon01.damage;
    display.querySelector(".mechWeaponEffect").innerHTML = mechType.weapon01.specialEffect;
    // displayWeapon("01", mechType, mechDisplayPosition);
    // if weapon fill out, else cut the paragraph to leave room for next item.
  }
  if (mechType.weapon02.weaponName = String) {
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
function mech(mechName, mechType, hull, systems, agility, engineering, hp, armor, evasion, edefense, speed, size, heatCap, saveTarget, sensors, weaponName01, position01, keywords01, accuracy01, range01, damage01, specialEffect01, weaponName02, position02, keywords02, accuracy02, range02, damage02, specialEffect02) {
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
  this.weapon01 = new weaponBase(weaponName01, position01, keywords01, accuracy01, range01, damage01, specialEffect01)
  this.weapon02 = new weaponBase(weaponName02, position02, keywords02, accuracy02, range02, damage02, specialEffect02)
}

assaultMech = new mech("Assault01", "assault", "+1", "+1", "+1", "+1", 15, 1, 8, 8, 4, 1, 8, 10, 8, "Assault rifle", "Main Rifle,", "Reliable 2,", "+1", 10, 4, "", "Combat Knife", "Aux Melee", "", "+1", 1, 4, "")
assasinMech = new mech("Assasin01", "assasin", "+0", "+1", "+2", "-1", 15, 0, 12, 8, 6, "1/2 or 1", 7, 10, 10)



// holding for later document.getElementById("mechDataDisplay" + displaySpot).innerHTML