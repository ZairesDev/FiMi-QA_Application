let all = document.querySelector(".allSearch");
let qaAgent = document.querySelector(".qaAgentSearch");
let emp = document.querySelector(".employeeSearch");
let empName = document.querySelector(".empNameSearch");

all.addEventListener("click", () => {
  all.classList.add("is-active");
  qaAgent.classList.remove("is-active");
  emp.classList.remove("is-active");
  empName.classList.remove("is-active");
});

qaAgent.addEventListener("click", () => {
  all.classList.remove("is-active");
  qaAgent.classList.add("is-active");
  emp.classList.remove("is-active");
  empName.classList.remove("is-active");
});

emp.addEventListener("click", () => {
  all.classList.remove("is-active");
  qaAgent.classList.remove("is-active");
  emp.classList.add("is-active");
  empName.classList.remove("is-active");
});

empName.addEventListener("click", () => {
  all.classList.remove("is-active");
  qaAgent.classList.remove("is-active");
  emp.classList.remove("is-active");
  empName.classList.add("is-active");
});
