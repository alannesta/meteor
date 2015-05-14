(function(){

  angular
       .module('deckbuilder')
       .controller('UploadController', uploadController);

  function uploadController($scope, $meteor){

      var self = this;
      self.card = {};
      self.cards =  $meteor.collection(Cards);
      console.log(self.cards);
      
      var allSets = {
          "Missions": [
              {
                  "id": "TU4c_006e",
                  "name": "Bananas",
                  "type": "Enchantment",
                  "text": "This minion has +1/+1. <i>(+1 Attack/+1 Health)</i>"
              },
              {
                  "id": "TU4c_006",
                  "name": "Bananas",
                  "type": "Spell",
                  "faction": "Neutral",
                  "rarity": "Common",
                  "cost": 1,
                  "text": "Give a friendly minion +1/+1. <i>(+1 Attack/+1 Health)</i>"
              },
              {
                  "id": "TU4c_003",
                  "name": "Barrel",
                  "type": "Minion",
                  "faction": "Neutral",
                  "rarity": "Common",
                  "cost": 0,
                  "health": 2,
                  "text": "Is something in this barrel?",
                  "inPlayText": "Breakable",
                  "mechanics": ["Deathrattle"]
              },
              {
                  "id": "TU4c_002",
                  "name": "Barrel Toss",
                  "type": "Spell",
                  "faction": "Neutral",
                  "rarity": "Common",
                  "cost": 1,
                  "text": "Deal 2 damage."
              },
              {
                  "id": "TU4f_005",
                  "name": "Brewmaster",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 4,
                  "attack": 4,
                  "health": 4
              },
              {
                  "id": "TU4d_002",
                  "name": "Crazed Hunter",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 1,
                  "health": 1
              },
              {
                  "id": "TU4f_007",
                  "name": "Crazy Monkey",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 1,
                  "health": 2,
                  "text": "<b>Battlecry:</b> Throw Bananas.",
                  "mechanics": ["Battlecry"]
              },
              {
                  "id": "TU4e_007",
                  "name": "Dual Warglaives",
                  "type": "Weapon",
                  "rarity": "Common",
                  "cost": 6,
                  "attack": 4,
                  "durability": 2
              },
              {
                  "id": "TU4e_005",
                  "name": "Flame Burst",
                  "type": "Spell",
                  "rarity": "Common",
                  "cost": 3,
                  "text": "Shoot 5 missiles at random enemies for $1 damage each."
              },
              {
                  "id": "TU4e_002t",
                  "name": "Flame of Azzinoth",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 2,
                  "health": 1
              },
              {
                  "id": "TU4e_002",
                  "name": "Flames of Azzinoth",
                  "type": "Hero Power",
                  "cost": 2,
                  "text": "<b>Hero Power</b>\nSummon two 2/1 minions."
              },
              {
                  "id": "TU4a_003",
                  "name": "Gnoll",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 1,
                  "health": 1
              },
              {
                  "id": "TU4d_001",
                  "name": "Hemet Nesingwary",
                  "type": "Hero",
                  "rarity": "Common",
                  "health": 20,
                  "playerClass": "Hunter"
              },
              {
                  "id": "TU4c_005",
                  "name": "Hidden Gnome",
                  "type": "Minion",
                  "faction": "Neutral",
                  "rarity": "Common",
                  "cost": 2,
                  "attack": 1,
                  "health": 3,
                  "text": "Was hiding in a barrel!"
              },
              {
                  "id": "TU4a_001",
                  "name": "Hogger",
                  "type": "Hero",
                  "rarity": "Common",
                  "health": 10
              },
              {
                  "id": "TU4a_004",
                  "name": "Hogger SMASH!",
                  "type": "Spell",
                  "rarity": "Common",
                  "cost": 3,
                  "text": "Deal 4 damage."
              },
              {
                  "id": "TU4e_001",
                  "name": "Illidan Stormrage",
                  "type": "Hero",
                  "health": 30,
                  "playerClass": "Hunter"
              },
              {
                  "id": "TU4a_006",
                  "name": "Jaina Proudmoore",
                  "type": "Hero",
                  "rarity": "Common",
                  "health": 27,
                  "playerClass": "Mage"
              },
              {
                  "id": "TU4c_001",
                  "name": "King Mukla",
                  "type": "Hero",
                  "rarity": "Common",
                  "health": 26
              },
              {
                  "id": "TU4f_004o",
                  "name": "Legacy of the Emperor",
                  "type": "Enchantment",
                  "text": "Has +2/+2. <i>(+2 Attack/+2 Health)</i>"
              },
              {
                  "id": "TU4f_004",
                  "name": "Legacy of the Emperor",
                  "type": "Spell",
                  "rarity": "Common",
                  "cost": 3,
                  "text": "Give your minions +2/+2. <i>(+2 Attack/+2 Health)</i>"
              },
              {
                  "id": "TU4f_001",
                  "name": "Lorewalker Cho",
                  "type": "Hero",
                  "health": 25
              },
              {
                  "id": "TU4a_005",
                  "name": "Massive Gnoll",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 4,
                  "attack": 5,
                  "health": 2
              },
              {
                  "id": "TU4c_008e",
                  "name": "Might of Mukla",
                  "type": "Enchantment",
                  "text": "King Mukla has +8 Attack this turn.",
                  "mechanics": ["OneTurnEffect"]
              },
              {
                  "id": "TU4b_001",
                  "name": "Millhouse Manastorm",
                  "type": "Hero",
                  "rarity": "Common",
                  "health": 20,
                  "playerClass": "Mage"
              },
              {
                  "id": "TU4c_007",
                  "name": "Mukla's Big Brother",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 6,
                  "attack": 10,
                  "health": 10,
                  "text": "So strong! And only 6 Mana?!"
              },
              {
                  "id": "TU4e_003",
                  "name": "Naga Myrmidon",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 1,
                  "health": 1,
                  "text": "<b></b>"
              },
              {
                  "id": "TU4f_002",
                  "name": "Pandaren Scout",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 1,
                  "health": 1
              },
              {
                  "id": "TU4a_002",
                  "name": "Riverpaw Gnoll",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 2,
                  "health": 1
              },
              {
                  "id": "TU4f_003",
                  "name": "Shado-Pan Monk",
                  "type": "Minion",
                  "rarity": "Common",
                  "cost": 2,
                  "attack": 2,
                  "health": 2
              },
              {
                  "id": "TU4d_003",
                  "name": "Shotgun Blast",
                  "type": "Hero Power",
                  "rarity": "Common",
                  "cost": 2,
                  "text": "<b>Hero Power</b>\nDeal 1 damage.",
                  "playerClass": "Hunter"
              },
              {
                  "id": "TU4c_004",
                  "name": "Stomp",
                  "type": "Spell",
                  "faction": "Neutral",
                  "rarity": "Common",
                  "cost": 2,
                  "text": "Deal 2 damage to all enemies."
              },
              {
                  "id": "TU4f_006",
                  "name": "Transcendence",
                  "type": "Spell",
                  "rarity": "Common",
                  "cost": 1,
                  "text": "Until you kill Cho's minions, he can't be attacked."
              },
              {
                  "id": "TU4f_006o",
                  "name": "Transcendence",
                  "type": "Enchantment",
                  "text": "Until you kill Cho's minions, he can't be attacked."
              },
              {
                  "id": "TU4e_004",
                  "name": "Warglaive of Azzinoth",
                  "type": "Weapon",
                  "rarity": "Common",
                  "cost": 2,
                  "attack": 2,
                  "durability": 2
              },
              {
                  "id": "TU4c_008",
                  "name": "Will of Mukla",
                  "type": "Spell",
                  "rarity": "Common",
                  "cost": 3,
                  "text": "Restore 8 Health."
              }
          ],
          "Promotion": [
              {
                  "id": "Mekka4t",
                  "name": "Chicken",
                  "type": "Minion",
                  "cost": 0,
                  "attack": 1,
                  "health": 1,
                  "text": "<i>Hey Chicken!</i>",
                  "race": "Beast"
              },
              {
                  "id": "PRO_001",
                  "name": "Elite Tauren Chieftain",
                  "type": "Minion",
                  "rarity": "Legendary",
                  "cost": 5,
                  "attack": 5,
                  "health": 5,
                  "text": "<b>Battlecry:</b> Give both players the power to ROCK! (with a Power Chord card)",
                  "flavor": "He's looking for a drummer.  The current candidates are: Novice Engineer, Sen'jin Shieldmasta', and Ragnaros the Firelord.",
                  "artist": "Samwise Didier",
                  "collectible": true,
                  "elite": true,
                  "howToGetGold": "Awarded at BlizzCon 2013.",
                  "mechanics": ["Battlecry"]
              },
              {
                  "id": "Mekka3e",
                  "name": "Emboldened!",
                  "type": "Enchantment",
                  "text": "Increased Stats."
              },
              {
                  "id": "Mekka3",
                  "name": "Emboldener 3000",
                  "type": "Minion",
                  "faction": "Alliance",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 0,
                  "health": 4,
                  "text": "At the end of your turn, give a random minion +1/+1.",
                  "inPlayText": "Emboldening",
                  "race": "Mech"
              },
              {
                  "id": "EX1_112",
                  "name": "Gelbin Mekkatorque",
                  "type": "Minion",
                  "faction": "Alliance",
                  "rarity": "Legendary",
                  "cost": 6,
                  "attack": 6,
                  "health": 6,
                  "text": "<b>Battlecry:</b> Summon an AWESOME invention.",
                  "flavor": "He's the leader of the gnomes, and an incredible inventor.  He's getting better, too; He turns things into chickens WAY less than he used to.",
                  "artist": "Ludo Lullabi",
                  "collectible": true,
                  "elite": true,
                  "howToGetGold": "This was rewarded to players who helped test the Store during the Beta.",
                  "mechanics": ["Battlecry"]
              },
              {
                  "id": "Mekka1",
                  "name": "Homing Chicken",
                  "type": "Minion",
                  "faction": "Alliance",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 0,
                  "health": 1,
                  "text": "At the start of your turn, destroy this minion and draw 3 cards.",
                  "inPlayText": "Pecking",
                  "race": "Mech"
              },
              {
                  "id": "PRO_001a",
                  "name": "I Am Murloc",
                  "type": "Spell",
                  "cost": 4,
                  "text": "Summon three, four, or five 1/1 Murlocs."
              },
              {
                  "id": "PRO_001at",
                  "name": "Murloc",
                  "type": "Minion",
                  "cost": 1,
                  "attack": 1,
                  "health": 1,
                  "race": "Murloc"
              },
              {
                  "id": "Mekka4",
                  "name": "Poultryizer",
                  "type": "Minion",
                  "faction": "Alliance",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 0,
                  "health": 3,
                  "text": "At the start of your turn, transform a random minion into a 1/1 Chicken.",
                  "inPlayText": "Poultryizing",
                  "race": "Mech"
              },
              {
                  "id": "PRO_001c",
                  "name": "Power of the Horde",
                  "type": "Spell",
                  "cost": 4,
                  "text": "Summon a random Horde Warrior."
              },
              {
                  "id": "Mekka2",
                  "name": "Repair Bot",
                  "type": "Minion",
                  "faction": "Alliance",
                  "rarity": "Common",
                  "cost": 1,
                  "attack": 0,
                  "health": 3,
                  "text": "At the end of your turn, restore 6 Health to a damaged character.",
                  "inPlayText": "Repairin'",
                  "race": "Mech"
              },
              {
                  "id": "PRO_001b",
                  "name": "Rogues Do It...",
                  "type": "Spell",
                  "cost": 4,
                  "text": "Deal $4 damage. Draw a card."
              },
              {
                  "id": "Mekka4e",
                  "name": "Transformed",
                  "type": "Enchantment",
                  "text": "Has been transformed into a chicken!",
                  "mechanics": ["Morph"]
              }
          ],
          "Reward": [
              {
                  "id": "NEW1_016",
                  "name": "Captain's Parrot",
                  "type": "Minion",
                  "rarity": "Epic",
                  "cost": 2,
                  "attack": 1,
                  "health": 1,
                  "text": "<b>Battlecry:</b> Put a random Pirate from your deck into your hand.",
                  "flavor": "Pirates and Parrots go together like Virmen and Carrots.",
                  "artist": "Daren Bader",
                  "collectible": true,
                  "race": "Beast",
                  "howToGet": "Unlocked when you have all the Pirates from the Expert Set.",
                  "howToGetGold": "Unlocked when you have all the Golden Pirates from the Expert Set.",
                  "mechanics": ["Battlecry"]
              },
              {
                  "id": "EX1_062",
                  "name": "Old Murk-Eye",
                  "type": "Minion",
                  "faction": "Neutral",
                  "rarity": "Legendary",
                  "cost": 4,
                  "attack": 2,
                  "health": 4,
                  "text": "<b>Charge</b>. Has +1 Attack for each other Murloc on the battlefield.",
                  "inPlayText": "Marglahg",
                  "flavor": "He's a legend among murlocs.  \"Mrghllghghllghg!\", they say.",
                  "artist": "Dan Scott",
                  "collectible": true,
                  "elite": true,
                  "race": "Murloc",
                  "howToGet": "Unlocked when you have all the Murlocs from the Expert Set.",
                  "howToGetGold": "Unlocked when you have all the Golden Murlocs from the Expert and Basic Sets.",
                  "mechanics": ["Charge"]
              }
          ]
      };

      self.initDatabase = function() {
          Object.keys(allSets).forEach(function(key) {
              allSets[key].forEach(function(card){
                  var name = (Cards.find({name: card.name}).fetch())[0].name;
                  console.log(name);
                  if (!Cards.findOne({name: card.name})){
                      //self.cards.push(card);
                      Cards.insert(card);
                  }
              })
          });
      };

      self.cleanCollection = function() {
          //Cards.remove({});
          Meteor.call('clearCollection', function(err, result){
              if(err) {
                  console.log(err);
              }else{
                  console.log(result);
              }
          });
      };
      
      document.getElementById('image-upload').addEventListener('change', handleFileSelect);

      function handleFileSelect(evt) {
          var file = evt.target.files[0];
          var reader = new FileReader();
          reader.onload = (function() {
              return function(e) {
                  //var filePayload = e.target.result;
                  $scope.$apply(function(){
                      self.card.imageData = e.target.result;
                      document.getElementById('preview').src = e.target.result;
                  });

              };
          })();
          reader.readAsDataURL(file);
      }

      self.save = function(){
          self.cards.push(self.card);
      };

      $scope.$watch(function(){
          return self.card;
      }, function(val){
          //console.log(val);
      }, true);

  }
})();
