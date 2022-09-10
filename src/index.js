import "./styles.css";

const data = 'My notebook';

document.getElementById("my-button").onclick = function foo() {
  document.getElementById("printHere").innerHTML = data;
  console.log("Hello world");
};

document.getElementById("add-data").onclick = function addData() {
  document.getElementById("addData").innerHTML = `
<li><textarea id="add-data">Moikka moi</textarea></li>
  `;
};
