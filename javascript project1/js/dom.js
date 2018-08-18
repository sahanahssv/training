document.body.style.backgroundColor = "gray";
document.body.style.margin="0px";
// main section
var mainsection=document.getElementById('mainsection');
// header section
var header=document.createElement('div');
header.classList.add("bar");
mainsection.appendChild(header);
// navigation
var navigation=document.createElement('div');
navigation.classList.add("navigation");

var title=document.createElement('div');
title.classList.add("title");
title.innerHTML="The Modernist";

var sub_title=document.createElement('div');
sub_title.classList.add("sub-title");
sub_title.innerHTML="Free PSD website Template";
title.appendChild(sub_title);
navigation.appendChild(title) ;
// navigation links
var navlinks=document.createElement('ul');
navlinks.classList.add("links");

var link1=document.createElement('li');
link1.innerHTML="Home";
link1.classList.add("list");
navlinks.appendChild(link1);

var link2=document.createElement('li');
link2.classList.add("list");
link2.innerHTML="Style Demo";
navlinks.appendChild(link2);

var link3=document.createElement('li');
link3.classList.add("list");
link3.innerHTML="Fullwidth";
navlinks.appendChild(link3);

var link4=document.createElement('li');
link4.classList.add("list");
link4.innerHTML="Dropdown";
navlinks.appendChild(link4);

var link5=document.createElement('li');
link5.classList.add("list");
link5.innerHTML="Protofol";
navlinks.appendChild(link5);

var link6=document.createElement('li');
link6.classList.add("list");
link6.innerHTML="Gallary";
navlinks.appendChild(link6);

navigation.appendChild(navlinks);

mainsection.appendChild(navigation);
// decrption of page
var text=document.createElement('div');
text.classList.add("text");
text.innerHTML="Cursus penati saccum nulla";
mainsection.appendChild(text);

var pa=document.createElement("p")
var para=document.createTextNode("Nullamlacus dui ipsum conseque loborttis non euisque morbi penas daplbulum orana.Urnaultricles quis  curabitur phasellen tesque congue magins vestibulum quismodo nulla et feugiat adipiscinia pellentum leo.");
pa.classList.add("paragraph");
pa.appendChild(para);
mainsection.appendChild(pa);

var btn=document.createElement("button");
btn.classList.add("btnn");
btn.innerHTML="Read-more";
mainsection.appendChild(btn);
// image
var image=document.createElement('div')
image.classList.add("image")
mainsection.appendChild(image);
