// JavaScript Document
//Create quotes array
var quotes_array = ["Wake up at 6 Am","Get breakfast at 6:30 Am","Go to work at 7 Am","Go home at 4 Pm","Go to sleep at 10 Pm"];
//Create prompt
var visitor_number = prompt("Hello visitor. Please enter a number");
var index = parseInt(visitor_number) % 5;
var quote = quotes_array[index];
//Write quote to the page
document.getElementById("quote").innerHTML = quote;

//Create websites links
var div = document.getElementById('web_links');
var web_array = ["https://www.apple.com", "https://www.netflix.com", "https://www.facebook.com"];
var a0 = document.createElement('a');
var title = document.createTextNode(web_array[0]);
a0.appendChild(title);
a0.href = web_array[0];
div.appendChild(a0);
title = document.createTextNode(web_array[1]);
var a1 = document.createElement('a');
a1.appendChild(title);
a1.href = web_array[1];
div.appendChild(a1);
title = document.createTextNode(web_array[2]);
var a2 = document.createElement('a');
a2.appendChild(title);
a2.href = web_array[2];
div.appendChild(a2);
//Create prompt
var visitor_web = prompt("Hello visitor. Please enter your favorite website");
title = document.createTextNode(visitor_web);
var a3 = document.createElement('a');
a3.appendChild(title);
a3.href = visitor_web;
div.appendChild(a3);

//Add and delete website link
web_array[3] = [visitor_web];
delete web_array[0];

//Write out the array
var array_string = web_array.toString();
var new_string = array_string.replace(/,/g, ' ');
document.getElementById("web_array").innerHTML = new_string;
