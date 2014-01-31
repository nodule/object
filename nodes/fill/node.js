var obj = input.object ? input.object : {};

if(input.keys.length !== input.in.length) {
  output.error = {
    msg: 'Key length does not match value length'
  };
} else {

  for(var i = 0; i < input.keys.length; i++) {
   obj[input.keys[i]] = input.in[i];
  }

  output.out = obj;
}
