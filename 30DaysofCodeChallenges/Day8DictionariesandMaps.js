function processData(input) {
	console.time("time");
    //Enter your code here
    var inputVal = input.split("\n");
    var _lookup = {};
  	var nameNum, val;
  	var len = parseInt(inputVal[0]);
    for(var _i=1; _i <= len; _i++){
        nameNum = inputVal[_i].split(" ");
        _lookup[nameNum[0]] = nameNum[1];
    }
  	len = inputVal.length;
    while(_i < len){
			val = _lookup[inputVal[_i]];
        if( val ){
            console.log(inputVal[_i] + "=" + val);
        }else{
            console.log("Not found");
        }
      _i++;
    }
	console.timeEnd("time");
}
