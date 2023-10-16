
     var races = racesData;
      var classes = classesData;
      var armor = armorData;
      var weapons = weaponData;
      var spells = jsonSpellData;
      var names = namesData;

      // select fields to monitor
      var charNameElement = document.getElementById('charName');
      var armorSelect = document.getElementById('armorSelect');
      var racesSelect = document.getElementById('racesSelect');
      var subclassesSelect = document.getElementById('subracesSelect');
      var classesSelect = document.getElementById('classesSelect');
      var subclassesSelect = document.getElementById('subclassesSelect');
      var raceElement = document.getElementById('race');
      var subraceElement = document.getElementById('subrace');
      var classElement = document.getElementById('class');
      var subclassElement = document.getElementById('subclass');
      var weaponSelect1 = document.getElementById('weaponSelect1');
      var weaponSelect2 = document.getElementById('weaponSelect2');
      var levelSelect = document.getElementById('levelSelect');

     function populateRaces() {
        
        for(r = 0; r < races.length; r++) {
          var newOption = document.createElement("option");
          newOption.value = races[r].name;
          newOption.text = races[r].name;
          racesSelect.appendChild(newOption);
        }
        
      }

      function populateClasses() {
        
        for(c = 0; c < classes.length; c++) {
          var newOption = document.createElement("option");
          newOption.value = classes[c].classname;
          newOption.text = classes[c].classname;
          classesSelect.appendChild(newOption);
        }
        
      }

      function populateSubRaces() {
        var subRaceDiv = document.getElementById('subrace');
        var raceName = racesSelect.value;
         if(subRaceDiv) {
          subRaceDiv.remove();
        }
        if(raceName && raceName != 'Choose' && raceName != 'Random') {
        var race = races.find(race => race.name === raceName);
        var subRaces = race.subraces;
        if (subRaces.length > 0) {
          if(subRaceDiv) {
            subRaceDiv.remove();
          }
          raceElement.insertAdjacentHTML('afterend', '<div class="input-group input-group-lg mb-3" id="subrace"><label class="input-group-text" for="subracesSelect" style="width: 150px;">SubRace</label><select class="form-select" id="subracesSelect"><option selected>Choose</option><option value="Random">Random</option></select></div>');
          var subraceElement = document.getElementById('subracesSelect');
          for (sr = 0; sr < subRaces.length; sr++) {
            var newOption = document.createElement("option");
            newOption.value = subRaces[sr].name;
            newOption.text = subRaces[sr].name;
            subraceElement.appendChild(newOption);
          }
        } else {
          if(subraceElement) {
          subraceElement.remove();
        }
        }
      }
      }

      function populateSubClasses() {
        var subclassDiv = document.getElementById('subclass');
        var className = classesSelect.value;
        if(subclassDiv) {
          subclassDiv.remove();
        }
        if(className && className != 'Choose' && className != 'Random') {
        var classvar = classes.find(classes => classes.classname === className);
        var subClasses = classvar.subclasses;
        if (subClasses.length > 0) {
          if(subclassDiv) {
            subclassDiv.remove();
          }
          classElement.insertAdjacentHTML('afterend', '<div class="input-group input-group-lg mb-3" id="subclass"><label class="input-group-text" for="subclassesSelect" style="width: 150px;">SubClass</label><select class="form-select" id="subclassesSelect"><option selected>Choose</option><option value="Random">Random</option></select></div>');
          var subclassElement = document.getElementById('subclassesSelect');
          for (sc = 0; sc < subClasses.length; sc++) {
            var newOption = document.createElement("option");
            newOption.value = subClasses[sc].name;
            newOption.text = subClasses[sc].name;
            subclassElement.appendChild(newOption);
          }
        } else {
          
        }
      } 

      
      }


      function populateArmor() {
        
        
          for (a = 0; a < armor.length; a++) {
            var newOption = document.createElement("option");
            newOption.value = armor[a].name;
            newOption.text = armor[a].name + ' (' + armor[a].category + ')';
            armorSelect.appendChild(newOption); 
        }
      }

      function populateWeapons() {

        for (w = 0; w < weapons.length; w++) {
          var newOption = document.createElement("option");
          newOption.value = weapons[w].name;
          newOption.text = weapons[w].name;
          weaponSelect1.appendChild(newOption);
        }
        for (w = 0; w < weapons.length; w++) {
          var newOption = document.createElement("option");
          newOption.value = weapons[w].name;
          newOption.text = weapons[w].name;
          weaponSelect2.appendChild(newOption);
        }
      }

      function populateCharacterSheet(characterObject){

        console.log(characterObject);
        var mainContain = document.getElementById('maincontain');
        let subRaceName = (characterObject.charactersubrace ? characterObject.charactersubrace.name : "");
        var characterSheetHTML = '';
            characterSheetHTML += '<div class="pt-3" id="character"><h2>CHARACTER</h2><div class="pt-3 pb-3"><h4>' + characterObject.charactername + '</h4><span>' + subRaceName + ' ' + characterObject.characterrace.name +  '<br>Level ' + characterObject.characterlevel + ' ' + characterObject.charactersubclass + ' ' + characterObject.characterclass.classname + '</span><br>';
            if (characterObject.characterrace.traits.length > 0){
              characterSheetHTML += '<span><b>Traits: </b>';
            }
            
            characterSheetHTML += '<div></div>';
            characterSheetHTML += '<div class="pt-5" id ="statblock"><h2>STATS</h2><div class="pt-3 pb-3"><h4>Ability Scores</h4>';
            characterSheetHTML += ' <div class="input-group input-group-lg mb-3"><span class="input-group-text" style="width: 150px;" id="ac">Armor Class</span><input type="text" class="form-control" value="' + characterObject.ac + '" aria-label="Armor Class" aria-describedby="basic-addon1" id="acScore"></div>'
            characterSheetHTML += ' <div class="input-group input-group-lg mb-3"><span class="input-group-text" style="width: 150px;" id="ac">Initiative</span><input type="text" class="form-control" value="' + characterObject.initiative + '" aria-label="Initiative" aria-describedby="basic-addon1" id="initScore"></div>';
            characterSheetHTML += ' <div class="input-group input-group-lg mb-3"><span class="input-group-text" style="width: 150px;" id="ac">Speed</span><input type="text" class="form-control" value="' + characterObject.characterrace.speed + '" aria-label="Speed" aria-describedby="basic-addon1" id="speed"></div>';

            characterSheetHTML += '<br><h4>Hit Points</h4><div style="width: 100%;"><div class="input-group input-group-lg mb-3"><span class="input-group-text" id="fullhp" style="width: 150px;">Standard HP</span>';
            characterSheetHTML += '<input type="text" class="form-control" value="' + characterObject.hp + '" aria-label="Standard HP" aria-describedby="basic-addon1"  id="standardhpinput"></div>';
            characterSheetHTML += '<div class="input-group input-group-lg mb-3"><span class="input-group-text" id="availhp" style="width: 150px;">Available HP</span> <input type="number" class="form-control" value="' + characterObject.hp + '" aria-label="Available HP" aria-describedby="basic-addon1" id="availhpinput"></div>';
            characterSheetHTML += '<div class="btn-group mb-5" role="group" aria-label="Modify hit points">';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'-\')">&nbsp;-&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'+\')">&nbsp;+&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'-5\')">&nbsp;-5&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'+5\')">&nbsp;+5&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'R\')">Reset</button>';
            characterSheetHTML += '</div></div>';

            for(let as = 0; as < characterObject.abilityscores.length; as++) {
              let abilityName = characterObject.abilityscores[as].name;
              let name = abilityName.toLowerCase();
              let score = characterObject.abilityscores[as].score;
              let mod = characterObject.abilityscores[as].modifier
              characterSheetHTML += '<div class="input-group input-group-lg mb-3" id="' + name + '">';
              characterSheetHTML += '<span class="input-group-text" id=""  style="width: 150px;">' + abilityName + '</span>';
              characterSheetHTML += '<input type="text" class="form-control" value="' + score + '" aria-label="' + abilityName + '" aria-describedby="basic-addon1" id="' + name + 'Score">';
              characterSheetHTML += '<span class="input-group-text" id=""  style="width: 150px;">Modifier</span>';
              characterSheetHTML += '<input type="text" class="form-control" value="' + mod + '" aria-label="' + abilityName + '" aria-describedby="basic-addon1" id="' + name + 'Mod">'
              characterSheetHTML += '</div>';
            }

            characterSheetHTML += '<div class="pt-5" id="weapons"><h2>INVENTORY</h2><br><h4>Weapons</h4><div class="accordion" id="weaponAccordion">';
            for(let w = 0; w < characterObject.weapons.length; w++) {
              let weapon = characterObject.weapons[w];
              
              characterSheetHTML += '<div class="accordion-item" style="background-image: url(\'https://www.toptal.com/designers/subtlepatterns/uploads/creampaper.png\')><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#weapon' + [w] + '" aria-expanded="false" aria-controls="weapon' + [w] + '" id="weaponName' + [w] + '">' + weapon.name + '</button></h2>';
              characterSheetHTML += '<div id="weapon' + [w] + '" class="accordion-collapse collapse" data-bs-parent="#weaponAccordion"><div class="accordion-body">';

              if(weapon.properties.length > 0) {
                for (let p = 0; p < weapon.properties.length; p++){
             if(p != 0 ) {
              characterSheetHTML += ', <em>' + weapon.properties[p]+ '</em>';
             } else {
              characterSheetHTML += '<em>' + weapon.properties[p]+ '</em>';
             }
            }
            characterSheetHTML += '<br><br>';
              }
              characterSheetHTML += '<strong>Damage: </strong>' + weapon.damage + '<br>';
              characterSheetHTML += '<strong>Damage Type: </strong>' + weapon.damagetype + '<br><br>';
              characterSheetHTML += '<span>' + weapon.description + '</span><br>';
              characterSheetHTML += '</div>';
              characterSheetHTML += '</div>';
              characterSheetHTML += '</div>';

            }
            characterSheetHTML += '</div>';

            characterSheetHTML += '<div class="input-group input-group-lg mb-3 pt-5"><span class="input-group-text" id="gold" style="width: 150px;">Gold</span> <input type="number" class="form-control" value="50" aria-label="Gold" aria-describedby="basic-addon1" id="goldinput"></div>';
            characterSheetHTML += '<div class="btn-group mb-5" role="group" aria-label="Modify hit points">';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'-\')">&nbsp;-&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'+\')">&nbsp;+&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'-5\')">&nbsp;-5&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'+5\')">&nbsp;+5&nbsp;</button>';
            characterSheetHTML += '<button type="button" class="btn btn-outline-secondary" onclick="modifyHP(\'R\')">Reset</button>';
            characterSheetHTML += '</div>';

            var spells = characterObject.spells
            if(spells.length > 0) {
              characterSheetHTML += '<div class="pt-5" id="spellsList"><h4>Spells</h4><div class="accordion" id="spellAccordion">';
              for(let s = 0; s < spells.length; s++) {
                let spellInfo = spells[s];
                characterSheetHTML += '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#spell' + [s] + '" aria-expanded="false" aria-controls="spell' + [s] + '" id="spellName' + [s] + '"><span class="badge rounded-pill text-bg-secondary">' + spellInfo.level.charAt(0) + '</span>&nbsp;&nbsp;' + spellInfo.name + '</button></h2>';
                characterSheetHTML += '<div id="spell' + [s] + '" class="accordion-collapse collapse" data-bs-parent="#spellAccordion"><div class="accordion-body"><em>' + spellInfo.level + ' ' + spellInfo.school + '</em><br><br>';
                characterSheetHTML += '<strong>Casting Time: </strong>' + spellInfo.casting_time + '<br>';
                characterSheetHTML += '<strong>Range: </strong>' + spellInfo.range + '<br>';
                characterSheetHTML += '<strong>Duration: </strong>' + spellInfo.duration + '<br>';
                characterSheetHTML += '<strong>Concentration: </strong>' + spellInfo.concentration + '<br><br>';
                characterSheetHTML += '<span>' + spellInfo.desc + '</span><br>';
                if(spellInfo.level != 'Cantrip'){
                characterSheetHTML += '<button class="btn btn-primary" id="useSpell' + [s] + '" onClick="useSpell(\'spellName' + [s] +'\',\'useSpell' + [s] + '\')">Use Spell</button>';
              }
                characterSheetHTML += '</div>';
                characterSheetHTML += '</div>';
                characterSheetHTML += '</div>';
              }
              characterSheetHTML += '</div></div>';
            }

            characterSheetHTML += '</div>';

            mainContain.innerHTML = characterSheetHTML;


      }

      function generateScores(){
        var characterName = charNameElement.value;
        var characterLevel = levelSelect.value;
        var characterObj = {};
        var armorSelected = armorSelect.value;
        var weaponsChosen = [];
        var weaponsSelected = [];
        var subClassElement = document.getElementById('subclassesSelect');
        var subRaceElement = document.getElementById('subracesSelect');
        weaponsSelected.push(weaponSelect1.value);
        weaponsSelected.push(weaponSelect2.value);

        // populate name if null
        if (characterName) {

        } else {
          var randomNameNumber = Math.floor(Math.random() * names.length);
          var characterName = names[randomNameNumber];
        }

        // if no class then choose one randomly
        if (classesSelect.value == "Choose" || classesSelect.value == "Random") {
          var classChosen = findClass("random");
        } else {
          
          var classChosen = findClass(classesSelect.value);
        }

        //console.log(classesSelect.value);

        // if no class then choose one randomly
        if (racesSelect.value == "Choose" || racesSelect.value == "Random") {
          var raceChosen = findRace("random");
        } else {
          var raceChosen = findRace(racesSelect.value);
        }

        // find the armor for the character
        if(armorSelected == "Choose" || armorSelected == "Random" || armorSelected == "RandomForClass" || armorSelected == "Random For Class") {
          var randomArmorNumber = Math.floor(Math.random() * armor.length);
          if (armorSelected == 'RandomForClass' || armorSelected == 'Random For Class') {
            if (classesSelect.value == 'Choose' || classesSelect.value == '') {
              alert('Select a class to proceed!');
            } else {
              var armorForClass = findArmor("class");
              var randomArmorNumber = Math.floor(Math.random() * armorForClass.length);
              var armorChosen = armorForClass[randomArmorNumber];
            }
          } else {
            var armorChosen = armor[randomArmorNumber];
          }
        } else {
          var armorChosen = findArmor("name", armorSelected);
        }

        // find the weapons
        for (ws = 0; ws < weaponsSelected.length; ws++) {
          if (weaponsSelected[ws] == "Choose" || weaponsSelected[ws] == "Random") {
            var weaponFound = findWeapon("random", "none");
            
            weaponsChosen.push(weaponFound);
          }
         else {
            var weaponFound = findWeapon("name", weaponsSelected[ws]);
            weaponsChosen.push(weaponFound);
            
          }
        }

        // get spells based on class and level
        var spellSearchObj = {};
            spellSearchObj["term"] = "byClass";
            spellSearchObj["className"] = classChosen.classname;
       //     spellSearchObj["className"] = classChosen.name;
        var spellsList = calculateSpells(spellSearchObj);


        //console.log(classChosen);
       // var classAcMod = calculateClassAcModifier(classesSelect.value, levelSection.value);

        // calculate the ability scores
        //var classInfo = findClass(classChosen);

        

        if (subRaceElement) {
          var charSubRace = subRaceElement.value;
        } else {
          var charSubRace = "random";
        }

        if (subClassElement) {
          var charSubClass = subClassElement.value;
        } else {
          var charSubClass = "random";
        }

        let subRacesForRace = raceChosen.subraces;

        var charSubRace = findSubRace(charSubRace, subRacesForRace);
        if(charSubRace){
        var abilityModifiersRace = charSubRace.abilitymodifiers;
      } else {
        var abilityModifiersRace = [];
      }

        var asModifiers = [];
        var abilityPreference = classChosen.abilitypreference;
        var abilityScores = calculateAbilityScores(asModifiers, abilityPreference, abilityModifiersRace);

        for (as = 0; as < abilityScores.length; as++) {
          if (abilityScores[as].name == 'Dexterity') {
            var dexModifier = abilityScores[as].modifier;
            //console.log('dex mod: ' + dexModifier);
          }
        };

        var initScore = dexModifier;
        
        // calculate AC
        var acScore = calculateAC(initScore, armorChosen.acmodifier);

        // calculate HP
        //console.log(classChosen);
        var classHitDie = classChosen.hitdie;
        var hpScore = calculateHP(classChosen.name, characterLevel, abilityScores, classHitDie);
        //console.log('hpScore ' + hpScore);


        //console.log(raceChosen.subraces);
        
        characterObj["charactername"] = characterName;
        characterObj["characterrace"] = raceChosen;
        characterObj["characterclass"] = classChosen;
        characterObj["charactersubclass"] = charSubClass;
        characterObj["characterlevel"] = characterLevel;
        characterObj["charactersubrace"] = charSubRace;
        characterObj["armor"] = armorChosen;
        characterObj["weapons"] = weaponsChosen;
        characterObj["abilityscores"] = abilityScores;
        characterObj["ac"] = acScore;
        characterObj["hp"] = hpScore;
        characterObj["initiative"] = initScore;
        characterObj["spells"] = spellsList;

        populateCharacterSheet(characterObj);

      }

      function calculateSpells(searchObj) {
        
        const spellsList = [];
        if(searchObj.term == "byClass") {
          if (searchObj.className == "Druid"){
            let spellsToFind = ['Shillelagh', 'Mending', 'Poison Spray', 'Charm Person', 'Thunderwave', 'Entangle', 'Hold Person', 'Pass Without Trace', 'Spike Growth', 'Conjure Animals', 'Call Lightning'];
            for(let s = 0; s < spellsToFind.length; s++) {
              var spellInfo = findSpell(spellsToFind[s]);
              
              spellsList.push(spellInfo)
            }
          }

        }
        return spellsList;
      }

      function calculateHP(className, levelNumber, abilityScores, classHitDie) {
        for (as = 0; as < abilityScores.length; as++) {
          if(abilityScores[as].name == 'Constitution') {
            var conModifier = abilityScores[as].modifier;
            break;
          }
        }

        const hitDieValue = parseInt(classHitDie.replace("1d", ""));
        let hp = 0;


          for (let h = 0; h < levelNumber; h++) {
          if (h === 0) {
            hp += (hitDieValue + parseInt(conModifier));
          } else {
            hp += (rollDice(hitDieValue) + parseInt(conModifier));
          }
        }
        return hp;
      }

      function calculateAC(dexModifier, armorMod) {
        if (dexModifier != null && armorMod != null) {

         var acScore = (armorMod == 0 ? (parseInt(dexModifier) + 10) : (parseInt(armorMod) + parseInt(dexModifier)))
        }
        return acScore;
      }

      function populateSpells() {

      }

      function findSpell(spellName) {
        return spells.find(spell => {
          return spell.name == spellName;
        })
      }

      function findClass(className) {
        
        if (className == "random") {
          var randomClassNumber = Math.floor(Math.random() * classes.length);
          var classData = classes[randomClassNumber];
        } else {
          classData = classes.find(classes => classes.classname === className);
        }
         return classData;
         
      }


      function findRace(raceName) {
        if (raceName == "random") {
          var randomRaceNumber = Math.floor(Math.random() * races.length);
          var raceData = races[randomRaceNumber];
        } else {
          raceData = races.find(races => races.name === raceName);
        }
         return raceData;
      }

      function findSubRace(subRaceName, subRaces) {
        if(subRaceName && subRaces) {
          if(subRaceName == 'random') {
            var randomSubRaceNumber = Math.floor(Math.random() * subRaces.length);
            var subRaceInfo = subRaces[randomSubRaceNumber];
          } else {
            var subRaceInfo = subRaces.find(subRaces => subRaces.name === subRaceName);
          }
        }
        return subRaceInfo;
      }


      function calculateClassAcModifier(className, levelNumber) {
        if (className == 'Druid')
          for (l = 0; l < levelNumber; l++) {

          }
      }

      function calculateAbilityScores(asModifiers, pref, raceModifiers) {
        var abilityScores = [];
        var rawScores = [];
        if (pref) {
        } else {
          var pref = ["Dexterity", "Wisdom", "Constitution", "Strength", "Intelligence", "Charisma"];
        }
        for (s = 0; s < pref.length; s++) {
          var scoreObj = {}
          var randomScore = rollDice(20);
    
            scoreObj["scoreNum"] = randomScore;
            rawScores.push(scoreObj);
        }

        rawScores.sort(function(a, b){return b.scoreNum - a.scoreNum});

        for (p = 0; p < pref.length; p ++) {
            var abilityObj = {};
            abilityObj["name"] = pref[p];
            abilityObj["score"] = rawScores[p].scoreNum;
           // abilityObj["modifier"] = rawScores[p].modNum;
            abilityScores.push(abilityObj);
          }

        for(let q = 0; q < abilityScores.length; q++) {
          console.log('loop started');
          let raceModInfo = raceModifiers.find(raceModifiers => raceModifiers.name === abilityScores[q].name);
          if (raceModInfo) {
            console.log(abilityScores[q].name + ' ' + abilityScores[q].score);
            let newScore = raceModInfo.value + abilityScores[q].score;
            abilityScores[q]["score"] = newScore;
            console.log(abilityScores[q].name + ' ' + abilityScores[q].score);
            
          }
          var modNumber = Math.floor((parseInt(abilityScores[q]["score"]) - 10) / 2);
          if (modNumber < 0) {
                var modScore = "-" + Math.abs(modNumber);
            } else if (modNumber > 0) {
                var modScore = "+" + modNumber;
            } else {
              var modScore = modNumber;
            }
            abilityScores[q]["modifier"] = modScore;

        }

          return abilityScores;
      }

      function d20() {
        var number = (Math.floor(Math.random() * 5) + 1) + (Math.floor(Math.random() * 5) + 1) + (Math.floor(Math.random() * 5) + 1) + (Math.floor(Math.random() * 5) + 1);
        return number;
      }

      function d8() {
        var number = (Math.floor(Math.random() * 8) + 1);
        return number;
      }

      function d12() {
        var number = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
        return number;
      }

      function rollDice(sides) {
        var number = (Math.floor(Math.random() * sides) + 1);
        return number;
      }

      function findWeapon(searchTerm, weaponName) {
        if (searchTerm == "random") {
          var randomWeaponNumber = Math.floor(Math.random() * weapons.length);
          var weaponToReturn = weapons[randomWeaponNumber];
        } else if (searchTerm == "name" && weaponName) {
          var weaponToReturn = weapons.find(weapons => weapons.name === weaponName);
         
        }
        return weaponToReturn;
      }

      function findArmor(searchTerm, armorName) {
        if (searchTerm == "class") {
          var armorToReturn = [];
          for (const armors of armor) {
            if (Array.isArray(armors.class) && armors.class.includes(classesSelect.value)) {
              armorToReturn.push(armors)
            }
          }
          
        } else if (searchTerm == "name" && armorName) {
          var armorToReturn = armor.find(armor => armor.name == armorName);
        }
        return armorToReturn;
      }

      function useSpell(id, spellID) {
      var htmlToAdd = '&nbsp;&nbsp;<span class="badge text-bg-danger">Used</span>';
      //var buttonToAdd = '<button class="btn btn-primary">clear</button>';
      var idHTML = document.getElementById(id).innerHTML;
      if(idHTML.indexOf(htmlToAdd) < 0 ) {
      document.getElementById(id).insertAdjacentHTML('beforeend', htmlToAdd);
      document.getElementById(spellID).innerHTML = 'Reset Spell';
    } else {
      document.getElementById(id).innerHTML = idHTML.replace(htmlToAdd, '');
      document.getElementById(spellID).innerHTML = 'Use Spell';
    }
      }


      function modifyHP(modifier) {
        var availHP = document.getElementById('availhpinput');
        var standardHP = document.getElementById('standardhpinput');
        if (modifier == '+') {
          availHP.value = parseInt(availHP.value) + 1;
        } else if (modifier == '-') {
          availHP.value = parseInt(availHP.value) - 1;
        } else if (modifier == '-5') {
          availHP.value = parseInt(availHP.value) - 5;
        }  else if (modifier == '+5') {
          availHP.value = parseInt(availHP.value) + 5;
        }  else if (modifier == 'R') {
          availHP.value = parseInt(standardHP.value);
        } else {

        }
      }

      populateClasses();
      populateRaces();
      populateArmor();
      populateWeapons();
