function f() {
    var a = 1, b = 20, c;
    print(a + " " + b + " " + c); // 1 20 undefined
    // declares g (but doesn't call immediately!)
    function g() {
    var b = 300, c = 4000;
    print(a + " " + b + " " + c); // 1 300 4000
    a = a + b + c;
    print(a + " " + b + " " + c); // 4301 300 4000
    }
    print(a + " " + b + " " + c); // 1 20 undefined
    g();
    print(a + " " + b + " " + c); // 4301 20 undefined
   } 