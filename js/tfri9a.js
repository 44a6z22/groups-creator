
var classMates = [];
var div = document.querySelectorAll('.price');

// create an object
 var aprennant = function(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
     this.desc = function(){
         return `${this.firstName} ${this.lastName}`;
     }
 }
 for(var i = 1 ; i <= 28 ; i++){
     classMates[i-1] = new aprennant(i,i);
 } // 3emer les object b ar9am 7it ma7afedc smiat dial kolchi


// set up an event listener 
div.forEach(function(div){
    div.addEventListener('click', giveAway);
});


function choise(smiat){ // function bach njbed smia aliatoire men tableau w n7eyedha meno

    var smiaN = Math.floor(Math.random()*smiat.length); // ghadi nakhoud wahed ra9em 3Achwa2i w nkhdem bih b7al l index
    var randomName = smiat[smiaN]; //sauvegardé smia li khrjat .

    smiat.splice(smiaN,1); // supprimé smia men tableau d'origin

    return randomName; // returné dik smia li sauvegardité
}

function groupManager(smiat){
  
    var bnademTfere9 = [],
        i = 0;
    
    while(smiat.length){ // LA BOUCLE katverifié wach mazalin les elements f tableau ola la 
        var j = 0;
        var groups = [];
        var howManyMembers = 6;
        if (i==3 || i==4){   
            howManyMembers = 5;
        }

        
        while(j<howManyMembers){ 
            groups[j] = choise(smiat);
            j++;
        }

        bnademTfere9[i] = groups; 
        i++;
    }
    
    return bnademTfere9;
}

function giveAway(e){
    var groupNumber = e.target.split('_');
    var comma =',', jma3a = '', howManyMembers = 6;

    if(groupNumber[1] >= 3){
        howManyMembers = 5;
    }

    for(var i = 1 ; i <= howManyMembers; i++){
        if(i == howManyMembers){
            comma = '';
        }

        jma3a += document.getElementById('member_'+groupNumber[1]+i).innerHTML + comma;
    }
    // enhancements 
    
    document.getElementById('groupId').value = jma3a;
    document.getElementById('counter').innerHTML = jma3a.split(',').length + " members";
    document.getElementById('counter').style.color = "white";
}


var done = groupManager(classMates);
for(var i = 0 ; i < done.length ; i++){
    for(var j = 0 ; j < done[i].length ; j++){
        document.getElementById('member_' + (i+1) + (j+1)).innerHTML = done[i][j].desc() ;
    }
}





