var $ = function(a){
    var sum = a;
    return {
        add: function(b){
            sum+= b;
            return this;
        },
	    result: function(){
		console.log(sum);
        }
    };
