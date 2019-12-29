var mydate = new Date();
var formattedDate = mydate.toISOString().slice(0,10);
//var options = { 
//    weekday: 'long', year: 'numeric', month:'long', day:'numeric'
//};
//ex:Sunday, October 6, 2019
//console.log(mydate.toLocaleDateString( "en-UK", options));
//ex:10/6/2019, 12:34:20 PM
console.log(mydate.toLocaleString());
//YYYY-MM-DD
console.log(formattedDate);