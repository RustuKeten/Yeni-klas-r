let addBtn = document.querySelector("#AddBtn");
let addInput = document.querySelector(".addInput");
let lists = document.querySelector("#lists");
let taskName = document.querySelector("#taskName")
addBtn.addEventListener("click", () => {
  if (!addInput.value) {
    alert("Please enter a task");
  } else {
    lists.innerHTML += `<div class="list">

                <span id="taskname">
                    ${addInput.value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-eraser"></i>
                </button>
            </div>`;
    addInput.value="";
    let delete_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < delete_tasks.length; i++) {
      delete_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    
      
    

  }
});
let current = new Date();
var yil = current.getFullYear();
var ay = current.getMonth()+1;
var gun = current.getDay()+5;
var saat = current.getHours();
var dakika = current.getMinutes();
var saniye = current.getSeconds();

let time = document.querySelector("#ts1");
time.innerHTML+= gun + "/" + ay + "/" + yil +"  " + saat + ":" + dakika + ":" + saniye;