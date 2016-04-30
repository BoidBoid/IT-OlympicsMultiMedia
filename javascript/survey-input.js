/**
 * Created by admin on 4/30/16.
 */
$(document).ready(function () {
    var ref = new Firebase("https://it-olympics-ica.firebaseio.com/");
    var input = {};
    var genderSelect = $("#gender");
    var raceSelect = $("#race");
    var educationSelect = $("#education");
    var employmentSelect = $("#employment");
    var gender;
    var race;
    var education;
    var employment;
    $("#submit").on("click", function(){
        var dataRef = new Firebase(ref + 'data');
        var women;
        var men;
        var otherGender;
        var white;
        var black;
        var indian;
        var asian;
        var hispanic;
        var otherRace;
        dataRef.on("value", function(snapshot){
            women = snapshot.val().women;
            men = snapshot.val().men;
            otherGender = snapshot.val().otherGender;

            white = snapshot.val().white;
            black = snapshot.val().black;
            indian = snapshot.val().indian;
            asian = snapshot.val().asian;
            hispanic = snapshot.val().hispanic;
            otherRace = snapshot.val().otherRace;


            gender = genderSelect[0].options[genderSelect[0].selectedIndex].value;
            race = raceSelect[0].options[raceSelect[0].selectedIndex].value;
            education = educationSelect[0].options[educationSelect[0].selectedIndex].value;
            employment = genderSelect[0].options[genderSelect[0].selectedIndex].value;
            input = {
                gender: gender,
                race: race,
                education: education,
                employment: employment
            };

        });

        if(gender == 1){
            men++;
        } else if (gender ==2){
            women++;
        } else if (gender ==3){
            otherGender++
        }

        if(race == 1){
            white++;
        } else if(race==2){
            black++;
        } else if(race == 3){
            indian++;
        } else if(race==4){
            asian++;
        } else if(race == 5){
            hispanic++;
        } else if(race==6){
            otherRace++;
        }



        dataRef.set({
            men: men,
            women:women,
            otherGender:otherGender,
            white:white,
            black:black,
            indian:indian,
            asian:asian,
            hispanic:hispanic,
            otherRace:otherRace
        }, function(){
            window.location.assign('../html/survey-output.html');
        })



    });

});