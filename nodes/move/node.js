// Receiving an array, check both are of the same length.
if(input.from.length !== input.to.length) {
  output.error = new Error('from length does not match to length');
} else {

  var doo = dot_object();
  for(var i = 0; i < input.from.length; i++) {
    doo.move(input.from[i], input.to[i], input.in);
  }

  output.out = input.in;

}
