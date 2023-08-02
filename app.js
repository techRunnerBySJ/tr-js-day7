// Closure in JavaScript
function outer() {
    const x = 10;
  
    function inner() {
      console.log(x);
    }
  
    return inner;
  }
  
  const closureFunc = outer();
  closureFunc(); // 10
  