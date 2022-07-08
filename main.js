import { data } from "./data.js";

let tr = document.getElementById("tr");
let tbody = document.getElementById("tbody");

Object.keys(data).forEach((element) => {
    let td = document.createElement("td");
    td.innerText = element;
    tr.appendChild(td);
});

for (let i = 0; i < Object.values(data).length; i++) {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "tr");
    Object.values(data).forEach((element) => {
        let td = document.createElement("td");
        td.innerText = element[i];
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
}
