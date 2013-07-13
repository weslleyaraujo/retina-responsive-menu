window.onload = function(){

	//  The function to change the class
	var changeClass = function (r,className1,className2) {
		var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
		if( regex.test(r.className) ) {
			r.className = r.className.replace(regex,' '+className2+' ');
	    }
	    else{
			r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
	    }
	    return r.className;
	};

	var menuElements = document.getElementById('menu');
	menuElements.insertAdjacentHTML('afterbegin', '<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="icon-menu"> </i> Menu</button>');

	document.getElementById('menutoggle').onclick = function() {
		console.log("ae");
		console.log(changeClass(this, 'navtoggle active', 'navtoggle'));
	} 
 
};