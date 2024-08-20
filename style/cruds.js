/*const creat = document.getElementById("creat");
creat.addEventListener("click", function creat(params) {
    console.log("welcome to cruds")
})*/

// creat clint

let fn = document.getElementById("FN");
let ln = document.getElementById("LN");
let job = document.getElementById("job");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let from = document.getElementById("from");
let to = document.getElementById("to");
let submit = document.getElementById("submit");
let mood = "creat";
let temp;

// creat submit collection data of jobs......................................................................

let humanJob;
if (localStorage.jobsavail != null) {
  humanJob = JSON.parse(localStorage.jobsavail);
} else {
  humanJob = [];
}

submit.onclick = function () {
  let human = {
    fn: fn.value.toLowerCase(),
    ln: ln.value.toLowerCase(),
    job: job.value.toLowerCase(),
    age: age.value,
    gender: gender.value,
    from: from.value,
    to: to.value,
  };
  if( mood === "creat"){
    humanJob.push(human);
  }else{
    humanJob[temp]=human;
    mood = "creat";
    submit.innerHTML = "create";
  }
  
  //save in local storage.....................................
  localStorage.setItem("jobsavail", JSON.stringify(humanJob));
  clearData();
  showdata();
};

//clear to data...........................................................................................................
function clearData() {
  fn.value = "";
  ln.value = "";
  job.value = "";
  age.value = "";
  gender.value = "";
  from.value = "";
  to.value = "";
}
//read....................................................................................................................

function showdata() {
  let table = "";
  for (let i = 0; i < humanJob.length; i++) {
    table += `
        <tr>
                            <th scope="row">${i}</th>
                            <td>${humanJob[i].fn}</td>
                            <td>${humanJob[i].ln}</td>
                            <td>${humanJob[i].job}</td>
                            <td>${humanJob[i].age}</td>
                            <td>${humanJob[i].gender}</td>
                            <td>${humanJob[i].from}</td>
                            <td>${humanJob[i].to}</td>
                            <td><button class="btn1" onclick="updateData(${i})">update</button></td>
                            <td><button class="btn1" onclick="deleteData(${i})">delete</button></td>
    
                        </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
}
showdata();
//delete .................................................................................................
function deleteData(i) {
  humanJob.splice(i, 1);
  localStorage.jobsavail = JSON.stringify(humanJob);
  showdata();
}
let deleteAll = document.getElementById("deleteAll");
function deleteall() {
  localStorage.clear();
  humanJob.splice(0);
  showdata();
}

let numberofdel = document.getElementById("numberofdel");
numberofdel.innerHTML = humanJob.length;

//update.....................................................................................................

function updateData(i) {
  fn.value = humanJob[i].fn;
  ln.value = humanJob[i].ln;
  job.value = humanJob[i].job;
  age.value = humanJob[i].age;
  gender.value = humanJob[i].gender;
  from.value = humanJob[i].from;
  to.value = humanJob[i].to;
  submit.innerHTML = "Update";
  mood = "update";
  temp = i;
}
//search.....................................................................................................

let searchMode = "name";

function searchby(id) {
  let searcher = document.getElementById("searcher");
  if (id === "byname") {
    searchMode = "name";
    searcher.placeholder = "search by first name";
  } else {
    searchMode = "jobs";
    searcher.placeholder = "search by jobs";
  }
  searcher.focus();
  searcher.value='';
  showdata()
}

function searchon(value) {

  let table = '';
    if (searchMode === 'name') {
      for (let i = 0; i < humanJob.length; i++) {
        if (humanJob[i].fn.includes(value.toLowerCase())) {
          table += `
          <tr>
                            <th scope="row">${i}</th>
                            <td>${humanJob[i].fn}</td>
                            <td>${humanJob[i].ln}</td>
                            <td>${humanJob[i].job}</td>
                            <td>${humanJob[i].age}</td>
                            <td>${humanJob[i].gender}</td>
                            <td>${humanJob[i].from}</td>
                            <td>${humanJob[i].to}</td>
                            <td><button class="btn1" >update</button></td>
                            <td><button class="btn1" onclick="deleteData(${i})">delete</button></td>
    
                        </tr>
          `;
        }
      }
    } else {

      for (let i = 0; i < humanJob.length; i++) {
        if (humanJob[i].job.includes(value.toLowerCase())) {
          table += `
          <tr>
                            <th scope="row">${i}</th>
                            <td>${humanJob[i].fn}</td>
                            <td>${humanJob[i].ln}</td>
                            <td>${humanJob[i].job}</td>
                            <td>${humanJob[i].age}</td>
                            <td>${humanJob[i].gender}</td>
                            <td>${humanJob[i].from}</td>
                            <td>${humanJob[i].to}</td>
                            <td><button class="btn1" >update</button></td>
                            <td><button class="btn1" onclick="deleteData(${i})">delete</button></td>
    
                        </tr>
          `;
        }
      }
      
    }
    document.getElementById("tbody").innerHTML = table;
  }
//clean data
