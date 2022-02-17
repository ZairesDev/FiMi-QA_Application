const employeeCard = document.querySelector('#employeeCard');
const searchBar = document.querySelector('#searchBar');
let data = [];

const fetchEmployees = async () => {
  try {
    const res = await fetch('/api/employees');

    data = await res.json();
    mapEmployee(data);
  } catch (err) {
    console.error(err);
  }
};

const mapEmployee = (employees) => {
  const cardContent = employees
    .map((employee) => {
      return `
        <div class="card card-margin is-flex">
            <div class="media-content has-text-centered">
                <p class="title is-4">${employee.first_name}</p>
                <p class="subtitle has-text-weight-bold is-6">${employee.last_name}</p>
            </div>
                <ul id="employeeCard" class="is-flex is-justify-content-space-around is-flex-direction-column has-text-centered">
                    <li>Number: ${employee.employee_number}</li>
                    <li>Site: ${employee.site}</li>
                    <li>Role: ${employee.role}</li>
                    <li>Language: ${employee.language}</li>
                    <li>Group: ${employee.group}</li>
                    <li>Supervisor ID:${employee.employeesuper_id}</li>
                    <li>QA Agent ID: ${employee.qaAgent_id}</li>
                </ul>
            </div>
        </div>
            <br>
        `;
    })
    .join('');
  console.log(employees);
  employeeCard.innerHTML = cardContent;
};

searchBar.addEventListener('keyup', (e) => {
  console.log(e.target.value);
  const searchValue = e.target.value.toLowerCase();

  const searchFilters = data.filter((employee) => {
    return (
      employee.first_name.toLowerCase().includes(searchValue) ||
      employee.last_name.toLowerCase().includes(searchValue) ||
      employee.site.toLowerCase().includes(searchValue) ||
      employee.role.toLowerCase().includes(searchValue) ||
      employee.language.toLowerCase().includes(searchValue) ||
      employee.group.toLowerCase().includes(searchValue)
    );
  });
  mapEmployee(searchFilters);
});

fetchEmployees();
