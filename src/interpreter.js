function Comm(code){
  this.code       = code;
  this.index      = 0;
  this.stack      = [];
  this.inputStack = [];
  this.commands   = { // wip
    " ": function(C){return;}
    "\"": function(C){C.mode=1;}
  }
}

Comm.prototype.read = function(input){
  // input is given seperated by newlines
  input = input.split("\n").map(eval);
  // UNSAFE: FIND ALTERNATIVE ===^
  this.inputStack = this.inputStack.concat(input);
}

Comm.prototype.step = function(){
  var curChar = this.code[this.index];
}
