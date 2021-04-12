window.onload = init;

function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	// in a if statement == is used to compare two value, if the values matches then the condition is true
	// an if statement is followed by an else statement which runs when the given condition is not met
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}
function init() {	
	document.querySelector('.submit').onclick = submit;
	
	document.querySelector('.ham').onclick = showHideMobileMenu;
	$('#form').submit(function (e) {
   		 e.preventDefault();
function HideNav() {
	var navbar = document.getElementById('nav')
}


   		 
    