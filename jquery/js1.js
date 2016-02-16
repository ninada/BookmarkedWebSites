// JavaScript Document

//$(document).ready(function(){alert("Hello, World!");});
//<script type = "text/javascript" src = "jquery/jquery-2.1.4.min.js"></script>

$(document).ready(function(){
	
	$('.smallDivs img').hover(
				
               function () {
                  $(this).velocity({
					  height:"200px",
					  width:"200px"},
					  100);
               }, 
				
               function () {
                  $(this).velocity({
					  height:"160px",
					  width:"160px"},
					  100);
               }
	);
    //When mouse rolls over
    /*$("#div_menu a").click(function(){
        //alert("Hello, World!");
    });
	*/
	
	/*
	$("#a_Home").click(function(){
		   $('#div_Home').animate({ 
                  display:block
               }, 1500 );
	})
		
	$("#a_Contact").click(function(){
		   $("#div_Contact").toggle( "slide", { direction: "down"  }, 2000 );
	});
	$("#a_Gallery").click(function(){
		  $("#div_Gallery").slideToggle( 'slow');
	});
	*/
		
});
