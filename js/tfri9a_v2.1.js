/*********************************************

    programe ki fere9 les taches 3la bnadem ;

*********************************************/


function tfri9a(smiat, lesTaches){
    var name = smiat.split(',');
    var topics = lesTaches.split(',');

    // split kat 9ette3 wahed string finma l9at l charactaire li 3titiha EX: virgule (,)

    var result = [];
    var times = name.length;

    // kat3tik ch7al men element kain f tableau

    while(name.length){

        var number = Math.floor(Math.random()*times);  // Math.floor(0.4) = 0 ; Math.random() = 0.4
        var names = Math.floor(Math.random()*times);

        /*
        Math.random() kan3tik ra9m 3Achw2i mabin 0 w 1
        w drebnaha f l3Adad dial les elements li f tableau
        bach i3tina ra9m 3Achwa2i bin 0 w dak l 3Adad
        */

        // Math.floor() kat7eyed lik l ar9am li mora l fasila

        var smiaLiT3zlat = name[names];
        var tacheLiT3zlat = topics[number];

        result[smiaLiT3zlat] = tacheLiT3zlat;

        name.splice(names, 1);
        topics.splice(number, 1);

        //splice() kat mse7 l element li T3zel men tableau, bach may3awdch it3zel

        times--;

    }
        result.sort();
        var total = '';
        for(var i in result){
         total += i + " : "+ result[i]+'\n';
        }
        return total;

}

 function getTasks(){
    var smiat = document.getElementById('groupId').value;
    var lesTaches = document.getElementById('tasks').value;

    alert(tfri9a(smiat, lesTaches));
}
