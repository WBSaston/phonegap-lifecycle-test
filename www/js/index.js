var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key = "pen";
var value = "Black";

var key = "Pen";
var value = window.localStorage.getItem(key);

window.localStorage.setItem(key,value);

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
	$("#text").text(key);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }

//data storage code

	var key = "pen";
	var value = "Black";

	var key = "Pen";
	var value = window.localStorage.getItem(key);
	
		$("#text").text(key);