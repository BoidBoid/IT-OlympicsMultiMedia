$(document).ready(function () {
    var dataRef = new Firebase("https://it-olympics-ica.firebaseio.com/data");
    var women;
    var men;
    var otherGender;
    var white;
    var black;
    var indian;
    var asian;
    var hispanic;
    var otherRace;
    dataRef.on("value", function (snapshot) {
        women = snapshot.val().women;
        men = snapshot.val().men;
        otherGender = snapshot.val().otherGender;

        white = snapshot.val().white;
        black = snapshot.val().black;
        indian = snapshot.val().indian;
        asian = snapshot.val().asian;
        hispanic = snapshot.val().hispanic;
        otherRace = snapshot.val().otherRace;

        var totalRace = white + black + indian + asian + hispanic +otherRace;

        $("#output").innerHTML("Women: " + women/women+men+otherGender + "% Men: " + men/women+men+otherGender + "% Other: " + otherGender/women+men+otherGender + "%");
        $("output2").innerHTML("White: " + white/totalRace + "% Black: " + black/totalRace + "% Indian: " + indian/totalRace + "% Asian: " + asian/totalRace + "% Hispanic: " + hispanic/totalRace + "% Undisclosed: " + otherRace/totalRace + "%")
    });
});