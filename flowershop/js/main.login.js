function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser = "admin";
	var corpass = "ucvadminace";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			window.alert("You are logged in as " + user.value);
			window.open(creare_cont.html);
		
		} else {
		
			window.alert("Incorrect username or password!");
		
		}
	
	} else {
	
			window.alert("Incorrect username or password!");
	
	}

}