// get the system time
// Author:sahana 16/08/2018
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

   
// main function to work the clock
// Author:sahana 16/08/2018
    function clock()
    {  
       if(hour>12)
         {
           hour=hour-12;
         }

         hour=180+hour*30+minute*0.5;
         minute=180+minute*6;
 
        document.getElementsByClassName("seconds_hand")[0].style.transform="rotate("+second+"deg)";
        document.getElementsByClassName("minute_hand")[0].style.transform="rotate("+minute+"deg)";
        document.getElementsByClassName("hour_hand")[0].style.transform="rotate("+hour+"deg)";
    // functions to rotate the hands
    // Author:sahana 16/08/2018
    setInterval(second_hand,1000);
    setInterval(hour_hand,3600000);
    setInterval(minute_hand,60000);
}
// function to rotate the second hand
// Author:sahana 16/08/2018
    function second_hand(){
    second+=6;
    var ref=document.getElementsByClassName("seconds_hand")[0];
    ref.style.transform="rotate("+second+"deg)";
    ref.style.transformOrigin="top left";
}

// function to rotate the minute hand
// Author:sahana 16/08/2018
var j=-180;
function minute_hand(){
    minute+=6;
    var ref=document.getElementsByClassName("minute_hand")[0];
    ref.style.transform="rotate("+minute+"deg)";
    ref.style.transformOrigin="top left";
}

// function to rotate the hourhand
// Author:sahana 16/08/2018
var k=-180;
function hour_hand(){
    hour+=30;
    var ref=document.getElementsByClassName("hour_hand")[0];
    ref.style.transform="rotate("+hour+"deg)";
    ref.style.transitionOrigin="top left";
}


    
