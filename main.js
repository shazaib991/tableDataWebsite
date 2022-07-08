import { data } from "./data.js";

let tr = document.getElementById("tr");
let tbody = document.getElementById("tbody");

//iterate over keys of data which should be headers of table using foreach on keys of data
Object.keys(data).forEach((element) => {
    let td = document.createElement("td");
    td.innerText = element;
    tr.appendChild(td);
});

//iterate over values of data which is about 17 and iterate over each of the values in data using foreach
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
