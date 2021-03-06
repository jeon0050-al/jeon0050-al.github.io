window.onload = init;

function init() {
	document.querySelector('.ham').onclick = showHideMobileMenu;

	$('#form').submit(function (e) {
   		 e.preventDefault();
   		 $("#results").removeClass('reveal');
   		 var form = this;
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		showformValues(form);
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 		$("#results").addClass('reveal');
   		 });
	});

}

// show the form values in the results div 
function showformValues(form){
	var formValues = $(form).serializeArray(); 
	
		
	$.each(formValues, function(index, field){
		$("#results").find("#"+field.name+"_result").text(field.value);

		// special check for email to add a link instead of just string
		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	});				
}


function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} 
	else {
		mobileNav.style.display="block";
	}
}