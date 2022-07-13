const url = "https://thawing-cliffs-56280.herokuapp.com/api/v1/tableData";

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const tableData = await response.json();

        return tableData;
    } catch (err) {
        console.log(err);
    }
};

const data = await fetchData();

let tr = document.getElementById("tr");
let tbody = document.getElementById("tbody");

//iterate over keys of data which should be headers of table using foreach on keys of data
Object.keys(data).forEach((element) => {
    let td = document.createElement("td");
    td.innerText = element;
    tr.appendChild(td);
});

//iterate over values of data which should be 54 and iterate over each of the values in data using foreach
const LengthOfDataValues = Object.values(data)[0];

for (let i = 0; i < Object.keys(LengthOfDataValues).length; i++) {
    let tr = document.createElement("tr");
    Object.values(data).forEach((element) => {
        let td = document.createElement("td");
        td.innerText = element[i];
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
}
