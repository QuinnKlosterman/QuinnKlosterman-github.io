/* @ qck version 1.0.0 */
function _qck(){
	_this = this;

	this.Base = function(){

		this.Yyy = function() {
			var x = Math.random() * 10;
        	var k = (x - (x % 1)) / 10;
        	return k;
		}

	}//end qck.Base

}//end _qck 
var qck = new _qck()