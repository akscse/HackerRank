process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
   	var n = parseInt(readLine());
  	var cycle = true;
  	var cont1=0, cont2=0;
    while(n>0){
      var rem = n%2;
      if(rem == 0){
        if(cont1 >= cont2){
          cont2=0;
          cycle = false;
        }else{
          cont1=0;
          cycle = true;
        }
      }else if(cycle){
        cont1++;
      }else{
        cont2++;
      }
      n = Math.floor(n/2);
    }
  cont1 > cont2 ? console.log(cont1) : console.log(cont2);
}