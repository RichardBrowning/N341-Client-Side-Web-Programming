/**************************************
 TITLE: buttons.js
 AUTHOR: Luxi Liao	(LL)	
 PURPOSE: print messages at the page
 ORIGINALLY CREATED ON: 13 October 2021 
 LAST MODIFIED ON: 14 October 2021 
 LAST MODIFIED BY: Luxi Liao (LL)	
 MODIFICATION HISTORY:
 13 October 2021 - Adding the functions. (LL)
 14 October 2021 - Writing the main fucntion. (LL)
 14 October 2021 - Adding comment
    to describe each function and some key statements (LL)
***************************************/

// A $( document ).ready() block.
$(document).ready(
    function(){
	//defining upgradeable content Object
    function Equipment(strName, arrayLevels, strTargetDiv, strButtonId) {
        //name of pirate warship upgradables
        this.strName = strName;
        //integer of level number
        this.intCurrentLevel= 1 ;
        //array for levels' upgradables name
        this.arrayLevels=arrayLevels;
        //target of output, directly element
        this.elTargetDiv=document.getElementById(strTargetDiv);
        this.elButton = document.getElementById(strButtonId);
        /******************
        NAME: upgrade
        PURPOSE:	
            update level number and refresh with print function
        PARAMETERS:
            none, but inner properties (intCurrentLevel, strName)
        RETURN VALUE:
            none, but set the properties and print new value to the page
        *******************/
        this.upgrade = function(){
            //if weapon level is not full
            if (this.intCurrentLevel < 3) {
                //upgrade level
                this.intCurrentLevel += 1;
            //if weapon fully upgraded
            } else {
                alert("Already fully upgraded " + this.strName + "!");
            }
            //refresh
            this.print();
        },
        /******************
        NAME: print
        PURPOSE:	
            update content using textContent
        PARAMETERS:
            none, but inner properties (intCurrentLevel, arrayLevels, elTargetDiv)
        RETURN VALUE:
            none, but print new value to the page
        *******************/
        this.print = function(){
            this.elTargetDiv.textContent = this.arrayLevels[this.intCurrentLevel - 1]
        }
    }
    //the upgradeables
    let arrayArmament = [
        "Standard Armour",
        "Double-Layer Armour",
        "Composite Armour",
    ];
    let arrayMainGun = [
        "88mm Standard Gun",
        "120mm Armour Piercing Gun",
        "160mm Mk51 Main Gun",
    ];
    let arrayAimingSystem = [
        "Standard Optical Aiming",
        "Advanced Optical Aiming with inflared vision",
        "Auto-tracking Aiming System",
    ];
    let arrayRadarAndSonar = [
        "Standard Microwave Radar",
        "Phased-Array Radar",
        "AMRD Radar System",
    ];
    let arrayTorpedoe = [
        "Mk-13 Torpedoe",
        "Spearfish-C Torpedoe",
        "Mk-48-C Torpedoe"
    ]
    //output area
    let arrayTargetDiv = [
        "armament",
        "mainGun",
        "aimingSystem",
        "radarAndSonar",
        "torpedoe"
    ]
    //upgradable names
    let arrayEquipments = [
        "Armour",
        "Main Gun",
        "Aiming System",
        "Radar&Sonar",
        "Torpedoe"
    ]
    let arrayButtons = [
        "updateArmour",
        "updateMainGun",
        "updateAimingSystem",
        "updateRadarAndSonar",
        "updateTorpedoe"
    ]
    var equipArmour = new Equipment(arrayEquipments[0], arrayArmament, arrayTargetDiv[0], arrayButtons[0]);
    var equipGun = new Equipment(arrayEquipments[1], arrayMainGun, arrayTargetDiv[1], arrayButtons[1]);
    var equipAiming = new Equipment(arrayEquipments[2], arrayAimingSystem, arrayTargetDiv[2], arrayButtons[2]);
    var equipRadarSonar = new Equipment(arrayEquipments[3], arrayRadarAndSonar, arrayTargetDiv[3], arrayButtons[3]);
    var equipTorpedoe = new Equipment(arrayEquipments[4], arrayTorpedoe, arrayTargetDiv[4], arrayButtons[4]);
    /*
    console.log(equipArmour);
    console.log(equipGun);
    console.log(equipAiming);
    console.log(equipRadarSonar);
    console.log(equipTorpedoe);
    */

   //print for the first time: initial level
   equipArmour.print();
   equipGun.print();
   equipAiming.print();
   equipRadarSonar.print();
   equipTorpedoe.print();

   //listen for button click
   equipArmour.elButton.onclick = function(){equipArmour.upgrade();};
   equipGun.elButton.onclick = function(){equipGun.upgrade()};
   equipAiming.elButton.onclick = function(){equipAiming.upgrade()};
   equipRadarSonar.elButton.onclick = function(){equipRadarSonar.upgrade()};
   equipTorpedoe.elButton.onclick = function(){equipTorpedoe.upgrade()};
    
}); // end of $(document).ready()

