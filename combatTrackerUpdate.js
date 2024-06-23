
let amountOfEnemies = 0;

function log(x) {
    console.log(x);
}

function addMech() {
    amountOfEnemies++
    let newMech = document.getElementById("selectMech").value + "Mech";
    //log(newMech)
    displayPosition = new MechDisplay(newMech);
} 

class MechDisplay {
    constructor(newMech) {
        this.mechType = JSON.parse(localStorage.getItem(newMech));
        //log(this.mechType)
        this.display = amountOfEnemies;
        this.generateMechHtml();
        }

    generateMechHtml() {
       let htmlBeingAdded = 
       `<div id="mechDataDisplay01">
            <b><p class="mechName" >${this.mechType.mechName}</p></b>

            <div class="mechSkillsBox">
                <b><p class="mechSkills" style="width: 80px;"></p></b>
                <p class="mechHull"${this.mechType.hull}</p>
                <p class="mechSystems">${this.mechType.systems}</p>
                <p class="mechAgility">${this.mechType.agility}</p>
                <p class="mechEngineering">${this.mechType.engineering}</p>
            </div>

            <div class="coreStatsBox" onclick="reduceHitpoints('01')">
                <b><p class="mechCoreStats" style="width: 80px;"></p></b>
            <div class="mechHealthcounter">
                <label class="mechHp" for="mechRemainingHealth"></label>
                <input class="mechRemainingHealth" type="number">${this.mechType.hp}
            </div>
            <p class="mechArmor">${this.mechType.armor}</p>
            <p class="mechEvasion">${this.mechType.evasion}</p>
            <p class="mechEDefense">${this.mechType.edefense}</p>
            <p class="mechSpeed">${this.mechType.speed}</p>
            <p class="mechSize">${this.mechType.size}</p>
            <p class="mechHeatCap">${this.mechType.heatCap}</p>
            <p class="mechSaveTarget">${this.mechType.saveTarget}</p>
            <p class="mechSensors">${this.mechType.sensors}</p>
            </div>

            <div class="baseGearBox">
            <b><p class="mechBaseGear" style="width: 80px;"></p></b>
            <div class="mechWeapon01" class="mechWeaponBox">
                <p class="mechWeaponName"></p>
                <p class="mechWeaponPosition"></p>
                <p class="mechWeaponKeywords"></p>
                <p class="mechWeaponAccuracy"></p>
                <p class="mechWeaponRange"></p>
                <p class="mechWeaponDamage"></p>
                <p class="mechWeaponEffect"></p>
            </div>
            <div class="mechWeapon02" class="mechWeaponBox">
                <p class="mechWeaponName"></p>
                <p class="mechWeaponPosition"></p>
                <p class="mechWeaponKeywords"></p>
                <p class="mechWeaponAccuracy"></p>
                <p class="mechWeaponRange"></p>
                <p class="mechWeaponDamage"></p>
                <p class="mechWeaponEffect"></p>
            </div>
            <p class="mechWeapon03"></p>
            </div>`
        log(htmlBeingAdded);
        document.getElementById("newDisplay").insertAdjacentHTML("afterend", htmlBeingAdded)    
    }

}

class Mech {
    constructor(mechName, mechType, hull, systems, agility, engineering, hp, armor, evasion, edefense, speed, size, heatCap, saveTarget, sensors, weaponName01, position01, keywords01, accuracy01, range01, damage01, specialEffect01, weaponName02, position02, keywords02, accuracy02, range02, damage02, specialEffect02) {
      this.mechName = mechName;
      this.type = "Type" + mechType;
      this.hull = "Hull: " + hull;
      this.systems = "systems: " + systems;
      this.agility = "agility: " + agility;
      this.engineering = "engineering: " + engineering;
      this.hp = "hp: " + hp;
      this.armor = "armor: " + armor;
      this.evasion = "evasion" + evasion;
      this.edefense = "E-defense: " + edefense;
      this.speed = "speed: " + speed;
      this.size = "size: " + size;
      this.heatCap = "heatCap: " + heatCap;
      this.saveTarget = "saveTarget: " + saveTarget;
      this.sensors = "sensors: " + sensors;
      this.weapon01 = new WeaponBase(weaponName01, position01, keywords01, accuracy01, range01, damage01, specialEffect01);
      this.weapon02 = new WeaponBase(weaponName02, position02, keywords02, accuracy02, range02, damage02, specialEffect02);
    }
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

    assaultMech = new Mech("Assault01", "assault", "+1", "+1", "+1", "+1", 15, 1, 8, 8, 4, 1, 8, 10, 8, "Assault rifle", "Main Rifle,", "Reliable 2,", "+1", 10, 4, "", "Combat Knife", "Aux Melee", "", "+1", 1, 4, "")
    assasinMech = new Mech("Assasin01", "assasin", "+0", "+1", "+2", "-1", 15, 0, 12, 8, 6, "1/2 or 1", 7, 10, 10)

    localStorage["assaultMech"] = JSON.stringify(assaultMech)