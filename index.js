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
var tarih = new Date();
var yil = tarih.getFullYear();
var ay = tarih.getMonth();
var gun = tarih.getDay();
var saat = tarih.getHours();
var dakika = tarih.getMinutes();
var saniye = tarih.getSeconds();
let haş2 = document.querySelector("h2");
haş2.innerHTML +=
  gun + "/" + ay + "/" + yil +"  " + saat + ":" + dakika + ":" + saniye;