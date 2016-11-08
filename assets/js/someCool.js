$(document).ready(function(){

      $('.title').html("When you do the common things in life in an uncommon way, you will command the attention of the world.");
      $('.author').html("George Washington Carver");
      $('.changeColor').css('background-color',"#16a085");

  		const colors = require('./custom.js');


  		$('.newQuoteButton').click(function(){
  			$.ajax({
           		headers: {
              		"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            	Accept: "application/json",
               		"Content-Type": "application/x-www-form-urlencoded"
            	},
   				url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
   				success: function(res) {
            var r = JSON.parse(res);
     				$('.title').html(r.quote);
            $('.author').html(r.author);
            var globalColor = 'rgb(' + colors.listColors()()[0] + ',' + colors.listColors()()[1] + ',' + colors.listColors()()[2] +')';
            
            
            $('.changeColor').css({'background-color':globalColor , "transition": "width 2s" }  );
   				}
 			});	
  		});
  		
});