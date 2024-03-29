variable = 10;
(() => {
  foo = 100;
  console.log(variable);
  var foo = 100;
  variable = 20;
  console.log(variable);
})();
//console.log(foo); // foo is not define ist sshoe the error
console.log(variable);
var variable = 30;
