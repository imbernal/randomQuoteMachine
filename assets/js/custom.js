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