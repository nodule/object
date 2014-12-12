on.input.in = function(data) {
  var i;
  var obj = input.object ? input.object : {};
  if(input.keys.length !== data.length) {
    output({error: Error('Key length does not match value length')});
  } else {
    for(i = 0; i < input.keys.length; i++) {
     obj[input.keys[i]] = data[i];
    }
    output({out: obj});
  }
};
