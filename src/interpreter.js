function Comm(code){
  this.code                = code;
  this.index               = 0;
  this.paradigm            = "stack";
  this.mode                = 0;
  this.running             = true;
  this.stack               = [];
  this.inputStack          = [];
  // commands v
  this.commands            = {};
  this.commands.stack      = {
    " ": function(C){return;},
    "!": function(C){C.stack.push(C.code[++C.index]);return;},
    "\"": function(C){C.mode=1;return;},
    "#": function(C){
      var t1=C.stack.pop();
      var t2=C.stack.pop();
      // checking if stack is empty
      if(t1)C.stack.push(t1);
      if(t2)C.stack.push(t2);
      return;
    },
    "%": function(C){
      var B=C.stack.pop();
      var A=C.stack.pop();
      C.stack.push(A%B);
      return;
    },
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
    "*": function(C){
      var A=C.stack.pop();
      var B=C.stack.pop();
      C.stack.push(A*B);
      return;
    },
    "+": function(C){
      var A=C.stack.pop();
      var B=C.stack.pop();
      C.stack.push(A+B);
      return;
    },
    "-": function(C){
      var A=C.stack.pop();
      var B=C.stack.pop();
      C.stack.push(A-B);
      return;
    },
    "/": function(C){
      var A=C.stack.pop();
      var B=C.stack.pop();
      C.stack.push(A/B);
      return;
    },
    "0": function(C){C.stack.push(0);return;},
    "1": function(C){C.stack.push(1);return;},
    "2": function(C){C.stack.push(2);return;},
    "3": function(C){C.stack.push(3);return;},
    "4": function(C){C.stack.push(4);return;},
    "5": function(C){C.stack.push(5);return;},
    "6": function(C){C.stack.push(6);return;},
    "7": function(C){C.stack.push(7);return;},
    "8": function(C){C.stack.push(8);return;},
    "9": function(C){C.stack.push(9);return;},
    "A": function(C){C.stack.push(10);return;},
    "B": function(C){C.stack.push(11);return;},
    "C": function(C){C.stack.push(12);return;},
    "D": function(C){C.stack.push(13);return;},
    "E": function(C){C.stack.push(14);return;},
    "F": function(C){C.stack.push(15);return;},
    "f": function(C){C.paradigm = "function";}
  }
  this.commands.function   = {
    "s": function(C){C.paradigm = "stack"}
  }
  // command descriptions (currently empty, duh)
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

Comm.prototype.out   = function(val){
  // no HTML attached at the moment, so alert will suffice
  console.log("STDOUT ~>",val);
}

Comm.prototype.read  = function(input){
  // input is given seperated by newlines
  input = input.split("\n").map(eval);
  // UNSAFE: FIND ALTERNATIVE ===^
  this.inputStack = this.inputStack.concat(input);
}

Comm.prototype.step  = function(){
  var curChar = this.code[this.index];
  var curFunc = this.commands[this.paradigm][curChar];
  if(curFunc) curFunc(this);
  this.index++;
  // is the code done executing?
  if(this.index>=this.code.length){
    this.out(this.stack[this.stack.length-1]);
    return this.running = false;
  }
  return this; // always a truthy value, unless something has gone horribly wrong, at which point the code rightfully stops
}

Comm.prototype.run   = function(){
  while(this.running&&this.step());
  return this;
}

// wrapper function
function evalComm(code){
  var inst = new Comm(code);
  return inst.run();
}
