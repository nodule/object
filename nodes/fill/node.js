on.input.in = function() {
  var i;
  var obj = $.object ? $.object : {};
  if($.keys.length !== $.in.length) {
    output({error: Error('Key length does not match value length')});
  } else {
    for(i = 0; i < $.keys.length; i++) {
     obj[$.keys[i]] = $.in[i];
    }
    output({out: obj});
  }
};
