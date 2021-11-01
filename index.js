// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function onformsubmit(){
let formData=readformData();
 insertNewRecord(formData);

}
function readformData(){
let formData={};
formData["Fullname"]=document.getElementById("Fullname").value;
formData["age"]=document.getElementById("age").value;
formData["Employeecode"]=document.getElementById("Employeecode").value;
formData["salary"]=document.getElementById("salary").value;
return formData
}
 function insertNewRecord(Data){
let table=document.getElementById("Employeelist").getElementsByTagName("tbody")[0];
let newRow=table.insertRow(table.length);
cell1=newRow.insertCell(0);
cell1.innerHTML=data.Fullname;
cell2=newRow.insertCell(1);
cell2.innerHTML=data.age;
cell3=newRow.insertCell(2);
cell3.innerHTML=data.Employeecode;
cell4=newRow.insertCell(3);
cell4.innerHTML=data.salary;
cell4=newRow.insertCell(4);
cell4.innerHTML=<a>edit</a> ,<a>delete</a>;

 }