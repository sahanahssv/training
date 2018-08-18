// onload function is called
// Author:sahana 13-08-2018

    function weather() {
    	var selected_city = document.getElementById("selection");
    var city = selected_city.options[selected_city.selectedIndex].value;

    
// AJAX request
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var now = new Date();
    var hour = now.getHours();
    
    if(hour>=1 && hour<12){
      document.getElementById('wish').innerHTML= "Good Morning";
    }
    if( hour>=12 && hour<16){
      document.getElementById('wish').innerHTML= "Good Afternon";
    }
     if(hour>=16 && hour<20)  {
      document.getElementById('wish').innerHTML= "Good evening";
    } 
    if(hour>=20 && hour<=24)  {
      document.getElementById('wish').innerHTML= "Good night ";
    } 

      var days=JSON.parse(this.response);
      // using forecost array access the weekdays
      var weekday=days.query.results.channel.item.forecast[0].day;
      document.getElementById('day').innerHTML=weekdays(weekday);

      var weekday=days.query.results.channel.item.forecast[1].day;
      document.getElementById('day-one').innerHTML=weekdays(weekday);

      var weekday=days.query.results.channel.item.forecast[2].day;
      document.getElementById('day-two').innerHTML=weekdays(weekday);

      var weekday=days.query.results.channel.item.forecast[3].day;
      document.getElementById('day-three').innerHTML=weekdays(weekday);

      var weekday=days.query.results.channel.item.forecast[4].day;
      document.getElementById('day-four').innerHTML=weekdays(weekday);

      var weekday=days.query.results.channel.item.forecast[5].day;
      document.getElementById('day-five').innerHTML=weekdays(weekday);

      var weekday=days.query.results.channel.item.forecast[6].day;
      document.getElementById('day-six').innerHTML=weekdays(weekday);
       
      
      // acessing the high and low temperatures and convert into degree
      var ids=['low','low1','low2','low3','low4','low5','low6'];
      var highids=['high','high1','high2','high3','high4','high5','high6'];
      for(let i=0; i<7;i++){
        var low= days.query.results.channel.item.forecast[i].low;
        var lower =(low-32)*5/9;
        var high= days.query.results.channel.item.forecast[i].high;
        var higher=(high-32)*5/9;
        document.getElementById(ids[i]).innerHTML=lower.toFixed()+"&deg";
        document.getElementById(highids[i]).innerHTML=higher.toFixed()+"&deg";
      }

      
      
    // images to show the weather condition
      
        var images=['img','img1','img2','img3','img4','img5','img6'];
        for( var i=0;i<7;i++){
          var weather=days.query.results.channel.item.forecast[i].text;
          console.log(weather);
          if(weather=="Breezy"){
            var image=document.getElementById(images[i]);
            image.style.background="url('images/weather.jpg') 65% 55%";
          }
          else if(weather=="Scattered Thunderstorms")
          {
            var image=document.getElementById(images[i]);
            image.style.background="url('images/weather.jpg') 64% 100%";
          }
         else if(weather=="Scattered Showers")
         {
              var image=document.getElementById(images[i]);
              image.style.background="url('images/weather.jpg') 95% 95%";
         }
         else if(weather=="Mostly Cloudy")
         {
          var image=document.getElementById(images[i]);
          image.style.background="url'(images/weather.jpg') 40% 7%";
         }
         
         else if(weather=="Partly Cloudy")
         {
          var image=document.getElementById(images[i]);
          
          image.style.background="url('images/weather.jpg') 5% 50%";
         }
         else if(weather=="Thunderstorms")
         {
          var image=document.getElementById(images[i]);
          
          image.style.background="url('images/weather.jpg') 68% 96%";
         }
         else if(weather=="Sunny")
         {
          var image=document.getElementById(images[i]);
          
          image.style.background="url('images/weather.jpg') 10% 0%";
         }
         else if(weather=="Mostly Sunny")
         {
          var image=document.getElementById(images[i]);
          
          image.style.background="url('images/weather.jpg') 94% 7%";
         }
         else if(weather=="Cloudy")
         {
          var image=document.getElementById(images[i]);  
          image.style.background="url('images/weather.jpg') 65% 12%";
         }
         else if(weather=="Rainy")
         {
          var image=document.getElementById(images[i]);
          
          image.style.background="url('images/weather.jpg') 5% 95%";
         }
         else if(weather=="Partly Rainy")
         {
          var image=document.getElementById(images[i]);
          
          image.style.background="url('images/weather.jpg') 94% 50%";
         }
        }

        

    }
  };
  xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+city+"%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
  xhttp.send();
}
// switch case to get the days
function weekdays(weekday){
    switch(weekday){
        case 'Mon':return "MONDAY";
        case 'Tue':return "TUESDAY";
        case 'Wed':return "WEDNESDAY";
        case 'Thu':return "THURSDAY";
        case 'Fri':return "FRIDAY";
        case 'Sat':return "SATURDAY";
        case 'Sun':return "SUNDAY";

        
    }
}