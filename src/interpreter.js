function Comm(code){
  this.code                = code;
  this.index               = 0;
  this.paradigm            = "stack";
  this.stack               = [];
  this.inputStack          = [];
  this.paraCmds            = {};
  this.paraCmds.commands   = { // wip
    " ": function(C){return;},
    "\"": function(C){C.mode=1;},
    "f": function(C){C.paradigm = "function"}
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
