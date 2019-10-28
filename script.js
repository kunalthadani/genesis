var EventDate = new Date("Nov 1, 2019 17:30:00").getTime();

var x = setInterval(function() {

	var now = new Date().getTime();

	var distance = EventDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	var day_span = document.querySelector('#days');
	var hours_span = document.querySelector('#hours');
	var minutes_span = document.querySelector('#mins');
	var secs_span = document.querySelector("#secs")

	if(days < 10)
		days = '0' + days; 
	day_span.innerHTML = days;

	if(hours < 10)
		hours = '0' + hours; 
	hours_span.innerHTML = hours;

	if(minutes < 10)
		minutes = '0' + minutes; 
	minutes_span.innerHTML = minutes;


	if(seconds < 10)
		seconds = '0' + seconds; 
	secs_span.innerHTML = seconds;

},1);

document.addEventListener('DOMContentLoaded',function(){
	var drop = document.querySelector('#drop-icon');
	drop.onclick = function(){
		var menu= document.querySelector('#dropdown');
		if(menu.style.display == "block"){
			menu.style.display = "none";
		}
		else{
			menu.style.display = "block";
		}
		console.log(menu.style.display);
	};
});
