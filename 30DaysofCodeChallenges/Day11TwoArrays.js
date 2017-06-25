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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
  var sum =[];
  var _i=0;
  	for(var _height=0; _height <= arr.length - 3; _height++){
      for(var _width=0; _width <= arr[_height].length -3; _width++){
        sum[_i] = arr[_height][_width] + arr[_height][_width + 1] + arr[_height][_width + 2] + arr[_height + 1][_width + 1] +  arr[_height + 2][_width] + arr[_height + 2][_width + 1] + arr[_height + 2][_width + 2];
        _i++;
      }
    }
  console.log(Math.max(...sum));
}

