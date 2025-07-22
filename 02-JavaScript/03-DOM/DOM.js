// JavaScript source code
let check = document.getElementById("check");
check.innerHTML = "Hello DOM";
console.log(check.outerHTML);

let configuration = document.getElementById("configuration");
configuration.append("append();");
configuration.prepend("prepend();");
configuration.before("<h2>Добавление элементов к ноде</h2>");
configuration.after("Вот и сказочке конец");