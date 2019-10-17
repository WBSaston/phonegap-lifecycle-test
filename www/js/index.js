var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
		
document.addEventListener("deviceready", onDeviceReady, false);	

function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
	$("#storageCount").text("The value of the key is " + key + " and the value of the value is " + value);
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
	window.localStorage.setItem(key,value);
	var value = window.localStorage.getItem(key);
	
	alert(value);
	
	//number of items stored
	