  

window.addEventListener('load',timeForNow);
  
function timeForNow(event){
	var d = new Date()
	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();
	var milliseconde = d.getMilliseconds();
	var dn = "AM";
	var intervale = 1;

	if (hour == 0){
		 dn = 12
	}
	if(hour > 12 ){ 
		dn = "PM";
		hour = hour -12
	}
	if(minute <= 9){
		minute = "0" + minute;
	}
	if(second <= 9){
		second = "0" + second;
	}
	
	if(milliseconde <= 9){
		milliseconde = "00" + milliseconde;
	}else if(milliseconde <= 99){
		milliseconde = "0" + milliseconde;
	}
	
    document.getElementById("time").innerHTML = "<div class='hourMinuteSecond'><span class='hour'> " + hour + " </span> " + ":" + "<span class='minute'> " + minute + "</span> " + " <span class='second' >" + " : " + second + "</span ></div> " +"<span class='milliseconds'>  ." + milliseconde + "</span><span class='dn'>" + dn + "</span>" 
    + '</div>';
	setTimeout(timeForNow, intervale)
}

 


