var Student = {
    // please fill in your name and NetID
    // your NetID is the part of your email before @princeton.edu
    "name"  : "Byung-Cheol Cho, Kraig McFadden, Grant Schultheis",
    "netID" : "bccho, kraigm, wgs2",
};

Student.updateHTML = function( ) {
    var studentInfo = this.name + " &lt;" + this.netID + "&gt;";
    document.getElementById("student").innerHTML = studentInfo;
};
