function processData(input) {
    //Enter your code here
    var inputVal = input.split("\n");
    var stringCount = parseInt(inputVal[0]);
    var countStr = 1;
    while(stringCount > 0){
        var evenStr = "", oddStr = "";
        for(var _i=0; _i < inputVal[countStr].length; _i++){
            if(_i%2 == 0){
                evenStr = evenStr + inputVal[countStr][_i];
            } else{
                oddStr = oddStr + inputVal[countStr][_i];
            }
        }
        console.log(evenStr + " " + oddStr);
        countStr++;
        stringCount --;
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
