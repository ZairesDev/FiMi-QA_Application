const addEmployeeFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector(`input[name='first-name']`).value;
  const last_name = document.querySelector(`input[name='last-name']`).value;
  const employee_number = document.querySelector(`input[name='emp-number']`).value;
  const site = document.querySelector(`input[name='work-site']`).value;
  const role = document.querySelector(`input[name='role']`).value;
  const language = document.querySelector(`input[name='lang']`).value;
  const group = document.querySelector(`input[name='group']`).value;
  const employeesuper_id = querySelector(`input[name='supervisor']`).value;
  const qaAgent_id = document.querySelector(`input[name='qa-agent']`).value;

  const response = await fetch(`/form`, {
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
  if (response) {
    document.location(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

const updateEmployee = async (event) => {
  event.preventDefault();

  const employeeId = window.location.toString().split(`/`)[
    window.location.toString().split(`/`).length - 1
  ];

  const first_name = document.querySelector(`input[name='first-name']`).value.trim();
  const last_name = document.querySelector(`input[name='last-name']`).value.trim();
  const employee_number = document.querySelector(`input[name='emp-number']`).value.trim();
  const site = document.querySelector(`input[name='work-site']`).value.trim();
  const role = document.querySelector(`input[name='role']`).value.trim();
  const language = document.querySelector(`input[name='lang']`).value.trim();
  const group = document.querySelector(`input[name='group']`).value.trim();
  const employeesuper_id = querySelector(`input[name='supervisor']`).value.trim();
  const qaAgent_id = document.querySelector(`input[name='qa-agent']`).value.trim();

  const response = await fetch(`/form/${employeeId}`, {
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
    document.location.replace(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

document.querySelector(`.add-button`).addEventListener(`submit`, addEmployeeFormHandler);
document.querySelector(`.update-button`).addEventListener(`submit`, updateEmployee);
