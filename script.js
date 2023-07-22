var inputValue = document.querySelector(".input-value");
var tasks = document.querySelector(".tasks2");
function print_val() {
  if (inputValue.value == "") {
    alert("The task can not be empty !!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputValue.value;
    tasks.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputValue.value = "";
    save_data();
  }
}

tasks.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save_data();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      save_data();
    }
  },
  false
);

function save_data() {
  localStorage.setItem("data", tasks.innerHTML);
}

tasks.innerHTML = localStorage.getItem("data");
