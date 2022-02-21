const addEmployeeFormHandler = async (event) => {
  event.preventDefault();

  console.log(event.target.value, '32945837502954832750947589');

  const first_name = document.getElementById(`firstNameInput`).value.trim();
  const last_name = document.getElementById(`lastNameInput`).value.trim();
  const employee_number = document.getElementById(`empNumberInput`).value.trim();
  const site = document.getElementById(`workSiteInput`).value.trim();
  const role = document.getElementById(`roleInput`).value.trim();
  const language = document.getElementById(`languageInput`).value.trim();
  const group = document.getElementById(`groupInput`).value.trim();
  const employeesuper_id = document.getElementById(`supervisorInput`).value.trim();
  const qaAgent_id = document.getElementById(`qaAgentInput`).value.trim();

  console.log(first_name, last_name);

  const response = await fetch(`/api/form`, {
    method: `post`,
    body: JSON.stringify({
      first_name,
      last_name,
      employee_number,
      site,
      role,
      language,
      group,
      employeesuper_id,
      qaAgent_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    console.log(`success`);
    document.location.replace(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

const updateEmployee = async (event) => {
  event.preventDefault();

  // const id = window.location.toString().split(`/`)[
  //   window.location.toString().split(`/`).length - 1
  // ];
  // console.log(id);

  const first_name = document.getElementById(`firstNameInput`).value.trim();
  const last_name = document.getElementById(`lastNameInput`).value.trim();
  const employee_number = document.getElementById(`empNumberInput`).value.trim();
  const site = document.getElementById(`workSiteInput`).value.trim();
  const role = document.getElementById(`roleInput`).value.trim();
  const language = document.getElementById(`languageInput`).value.trim();
  const group = document.getElementById(`groupInput`).value.trim();
  const employeesuper_id = document.getElementById(`supervisorInput`).value.trim();
  const qaAgent_id = document.getElementById(`qaAgentInput`).value.trim();
  // console.log(qaAgent_id);
  const response = await fetch(`/api/form/${id}`, {
    method: `PUT`,
    body: JSON.stringify({
      first_name,
      last_name,
      employee_number,
      site,
      role,
      language,
      group,
      employeesuper_id,
      qaAgent_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document.getElementById(`add-button`).addEventListener(`click`, addEmployeeFormHandler);
document.getElementById(`update-button`).addEventListener(`click`, updateEmployee);
