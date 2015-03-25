$(document).ready(function () {
	var playerOne = $('#player1_strip.td.active').index() + 2;
	var playerTwo = $('#player2_strip.td.active').index() + 2;
	var totalLength = $("table > tbody").find("> tr:first > td").length
    $(document).keydown(function (e) {
        if (e.which == 81) {
        	$("#player1_strip td").removeClass("active");
        	playerOne ++
        	if (playerOne == totalLength) {
        		if($('h1').html() != "Player 2 wins!") { $('h1').html('Player 1 wins!'); }
        	}else{
        		$('#player1_strip td:nth-child('+ playerOne + ")").addClass("active");
        	}
        	
        }
        if (e.which == 80) {
        	$("#player2_strip td").removeClass("active");
        	playerTwo ++
        	if (playerTwo == totalLength) {
        		if($('h1').html() != "Player 1 wins!") { $('h1').html('Player 2 wins!'); }
        	}else{
        		$('#player2_strip td:nth-child('+ playerTwo + ")").addClass("active");
        	} 
        }
    });
  $('button').click(function(){
  	playerOne = 1
  	playerTwo = 2
  	$('td').removeClass('active');
  	$('h1').html('Go!');
  	$('#player1_strip td:first-child').addClass('active');
  	$('#player2_strip td:first-child').addClass('active');
  });  

});

