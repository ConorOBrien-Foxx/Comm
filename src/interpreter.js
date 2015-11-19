function Comm(code){
  this.code                = code;
  this.index               = 0;
  this.paradigm            = "stack";
  this.mode                = 0;
  this.stack               = [];
  this.inputStack          = [];
  // commands
  this.commands            = {};
  this.commands.stack      = {
    " ": function(C){return;},
    "!": function(C){C.stack.push(C.code[++C.index]);return;},
    "\"": function(C){C.mode=1;return;},
    "#": function(C){var toggle=C.stack.pop();C.stack.push(C.stack.pop(),toggle);return;},
    "%": function(C){var toggle=C.stack.pop();C.stack.push(C.stack.pop()%toggle);return;},
    "(": function(C){return;},
    ")": function(C){
      if(C.stack[C.stack.length-1]){  // if the top of the stack is truthy
        // find the bracket to jump to
        
        // traverse the code backwards to find the matching (
        var depth = 1;  // because we are at depth 1 already
        for(var i=C.index;i>=0;i--){
          if(C.code[C.index]=="("){
            depth--;
            if(!depth){ // we have found our (!
              break;
            }
          } else if(C.code[C.index]==")") depth++;
        }
        if(depth){  // unmatched parenthesis!!
          C.error({
            errLoc: C.index,
            msg: "Tried to jump to a nonexistant open brace at [~~errLoc]"
          });
        }
        // jump behind the matching brace
        C.index = i-1;
      } // else: do nothing. why do more work?
      return;
    },
    "f": function(C){C.paradigm = "function";}
  }
  this.commands.function   = {
    "s": function(C){C.paradigm = "stack"}
  }
  // command descriptions
  this.descript            = {}
}

Comm.prototype.error = function(data){
  // currently not connected to HTML, so this will suffice.
  data = data || {};
  data.msg = data.msg || "An error has occured";
  // parse data
  data.msg = data.msg.replace(/~~(.+)\b/g,function(a,matched){
    return data[matched] || "";
  });
  data.fixedState = this.code + ""; // saving a copy of the code for viewing later, if data is modified
  console.log(data);
  this.error = data;
  // for the moment, proceed.
}

Comm.prototype.read = function(input){
  // input is given seperated by newlines
  input = input.split("\n").map(eval);
  // UNSAFE: FIND ALTERNATIVE ===^
  this.inputStack = this.inputStack.concat(input);
}

Comm.prototype.step = function(){
  var curChar = this.code[this.index];
  var curFunc = this.commands[this.paradigm][curChar];
  if(curFunc) curFunc(this);
  this.index++;
}
