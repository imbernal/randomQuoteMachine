(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function randomColor(){

	

	function arrayColors(){
		var list = [];

		list[0] = Math.floor(Math.random() * 255);
		list[1] = Math.floor(Math.random() * 255);
		list[2] = Math.floor(Math.random() * 255);


		return list;
	}

	

	return arrayColors;

}

module.exports.listColors = randomColor; 
},{}],2:[function(require,module,exports){
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
},{"./custom.js":1}]},{},[2]);
