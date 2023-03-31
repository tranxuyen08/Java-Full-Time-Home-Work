// function totalNum(){
//   // let a = document.getElementById('a').value;
//   // let b = document.getElementById('b').value;
//   let a = prompt("a: ");
// let b = prompt("b: ");
// if ((a + b) < 4) {
//   console.log(1);
//   result = 'Below';
//   } else {
//     console.log(2);
//   result = 'Over';
//   }
// }
let login = prompt('Login','')
let message = (login == 'Employee') ?
'Hello' :
(login == 'Director') ?
'Greetings' :
(login == '') ?
'No login' :
'';
alert(message);