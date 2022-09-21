var selected = [];
var select = 0;
var intrvalid = [];
var intrvals = [];
var tkrar = 0;
function ssetclick(id) {
  var td = document.getElementById(id);

  var index = selected.indexOf(id);
  if (index == -1) {
    selected.push(id);
    select++;
    td.style.backgroundColor = "#ffffff";
    var time = 0;
    var intrvalid = setInterval(() => {
      time++;
      if (time > 3) {
        clearInterval(intrvalid);
        selected.splice(index, 1);
        intrvals.splice(index, 1);
        select--;
        document.getElementById(
          "select"
        ).innerText = `تعداد صندلی رزو شده :${select}`;
        td.innerText = id;
      } else {
        td.innerText = time;
        td.style.backgroundColor = "red";
      }
    }, 1000);
    intrvals.push(intrvalid);
  } else {
    clearInterval(intrvals[index]);
    td.style.backgroundColor = "green";
    td.innerText = id;
    td.onclick = null;
  }

  if (col * row == select) {
    alert("ظر فیت تکمیل است ");
  }
  document.getElementById(
    "select"
  ).innerText = `تعداد صندلی رزو شده :${select}`;
}
var btn = document.querySelector(".btn");
function but() {
  tkrar++;
  if (tkrar == 1) {
    btn.onclick = null;
  }
  row = document.querySelector(".row").value;
  col = document.querySelector(".col").value;
  var table = document.createElement("table");
  table.classList.add("table1");
  for (let i = 0; i < row; i++) {
    var tr = document.createElement("tr");
    for (let j = 0; j < col; j++) {
      var td = document.createElement("td");
      var tdId = String.fromCharCode(i + 65) + j;

      var text = document.createTextNode(tdId);
      td.appendChild(text);
      td.classList.add("td1");
      tr.appendChild(td);
      td.setAttribute("id", tdId);
      td.setAttribute("onclick", "ssetclick(this.id)");
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

function tkrar() {}
