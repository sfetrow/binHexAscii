//Binary to Hex works
function binToHex(number) {
  var hexa = parseInt(number, 2).toString(16).toUpperCase();
  document.getElementById('hex').value = hexa;
}

//binary to ascii works
function binToAsc(str) {
  var binString = '';
  str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  document.getElementById('asc').value = binString;
}

//hex to Binary works
function hexToBin(number) {
  var hexa = parseInt(number, 16).toString(2).substr(-8);
  document.getElementById('bin').value = hexa;
}

//hex to ascii work
function hexToAsc(number) {
  var hex = number.toString();
  var str = '';
  for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  document.getElementById('asc').value = str;
}

//ascii to binary works
function ascToBin(text) {
  var length = text.length,
       output = [];
   for (var i = 0;i < length; i++) {
     var bin = text[i].charCodeAt().toString(2);
     output.push(Array(8-bin.length+1).join("0") + bin);
   }
    document.getElementById('bin').value = output;
}

//ascii to hex works
function ascToHex(str) {
  var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++)
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
  }
  document.getElementById('hex').value = arr1;
}
