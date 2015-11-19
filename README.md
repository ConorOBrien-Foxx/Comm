# Comm
_A language in which functions are implemented by you, the user._

## What is Comm?
Comm is a stack-based programming language whose commands are defined by the people (you!). I start it off with basic commands; from there, you can open up an issue in this repository suggesting a command and its functionality, along with which character you request your function to be assigned to. This character does not have to be on the list, but I will start off with the printable ASCII (from ` ` (a space) to `~`) then proceed to two-or-more-byte characters. 

The interpreter is currently a work-in-progress.

## What commands are there?
Look no further:

    CHARACTER | CONTRIBUTOR | FUNCTION
    <space>   | self        | NO-OP
    !         | self        | Push next character to the stack
    "         | self        | Push characters to the stack until an unescpaed " is met
    #         | self        | Switch top two entities on the stack
    $         | self        | Pop the top element of the stack and output it
    %         | self        | Pops B then A and pushes A mod B
    &         | unnasigned  | --
    '         | unassigned  | --
    (         | self        | Begins a while loop
    )         | self        | Jumps to matching ( if the top of the stack is nonzero; otherwise proceeds
    *         | self        | Pops B then A and pushes AB (that is, A*B)
    +         | self        | Pops B then A and pushes A+B
    ,         | unassigned  | --
    -         | self        | Pops B then A and pushes A-B
    .         | unassigned  | --
    /         | self        | Pops B then A and pushes A/B
    0-9       | self        | Push a numeric literal to the stack
    :         | unassigned  | --
    ;         | unassigned  | --
    <         | unassigned  | --
    =         | self        | Pops B then A and pushes the equality of A and B
    >         | unassigned  | --
    ?         | unassigned  | --
    @         | unassigned  | --
    A         | self        | Push 10 to the stack
    B         | self        | Push 11 to the stack
    C         | self        | Push 12 to the stack
    D         | self        | Push 13 to the stack
    E         | self        | Push 14 to the stack
    F         | self        | Push 15 to the stack
    G         | unassigned  | --
    H         | unassigned  | --
    I         | unassigned  | --
    J         | unassigned  | --
    K         | unassigned  | --
    L         | unassigned  | --
    M         | unassigned  | --
    N         | unassigned  | --
    O         | unassigned  | --
    P         | unassigned  | --
    Q         | Mego [1]    | Terminates program
    R         | unassigned  | --
    S         | unassigned  | --
    T         | unassigned  | --
    U         | unassigned  | --
    V         | unassigned  | --
    W         | unassigned  | --
    X         | unassigned  | --
    Y         | unassigned  | --
    Z         | unassigned  | --
    [         | unassigned  | --
    \         | unassigned  | --
    ]         | unassigned  | --
    ^         | unassigned  | --
    _         | unassigned  | --
    `         | unassigned  | --
    a         | unassigned  | --
    b         | unassigned  | --
    c         | unassigned  | --
    d         | unassigned  | --
    e         | unassigned  | --
    f         | unassigned  | --
    g         | unassigned  | --
    h         | unassigned  | --
    i         | unassigned  | --
    j         | unassigned  | --
    k         | unassigned  | --
    l         | unassigned  | --
    m         | unassigned  | --
    n         | unassigned  | --
    o         | unassigned  | --
    p         | self        | Jumps to matching q.
    q         | self        | Begins do...while loop. If the top of the stack is nonzero, proceed. Otherwise, jump after matching p
    r         | unassigned  | --
    s         | unassigned  | --
    t         | unassigned  | --
    u         | unassigned  | --
    v         | unassigned  | --
    w         | unassigned  | --
    x         | unassigned  | --
    y         | unassigned  | --
    z         | unassigned  | --
    {         | unassigned  | --
    |         | unassigned  | --
    }         | unassigned  | --
    ----
    Contributors:
    [1]: Mego, https://github.com/Mego
