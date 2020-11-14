function to(){
    var pipa = document.getElementById("pipa");
    var bb = document.getElementById("bb");

    var R =  Math.floor(Math.random() * 256);
    var G =  Math.floor(Math.random() * 256);
    var B =  Math.floor(Math.random() * 256);

    var R1 =  Math.floor(Math.random() * 256); 
    var G1 =  Math.floor(Math.random() * 256);
    var B1 =  Math.floor(Math.random() * 256); 

    var R2 =  Math.floor(Math.random() * 256); 
    var G2 =  Math.floor(Math.random() * 256);
    var B2 =  Math.floor(Math.random() * 256);

    var h = 0;
    var e = 0;
    var x = 0;

    var h1 = 0;
    var e1 = 0;
    var x1 = 0;


    h = (R).toString(16);
    e = (G).toString(16);
    x = (B).toString(16);

    h1 = (R1).toString(16);
    e1 = (G1).toString(16);
    x1 = (B1).toString(16);

    pipa.style.borderColor=  "rgb(" + R2 + "," + G2 + "," + B2 + ")";
    butt.style.backgroundColor= "rgb(" + R2 + "," + G2 + "," + B2 + ")";

    bb.style.backgroundColor= "rgb(" + R1 + "," + G1 + "," + B1 + ")";

    pipa.style.backgroundColor= "rgb(" + R + "," + G + "," + B + ")";

    pipa.innerHTML= R + " " + G + " " + B + "<br>" + "#" + h + e + x;

    bb1.innerHTML= R1 + " " + G1 + " " + B1 + "<br>" + "<font size='128'>" + "#" + h1 + e1 + x1 + "</font>";
    bb1.style.textAlign= "center";
    bb1.style.fontFamily= "Impact";
    bb1.style.fontSize= "255px";
    bb1.style.lineHeight= "0.4";

}