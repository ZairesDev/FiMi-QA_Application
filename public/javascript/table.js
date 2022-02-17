const tableFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/employees`, {
    method: `POST`,
    body: JSON.stringify({
      id,
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
    console.log(`Success!`);
  } else {
    alert(response.statusText);
  }
};

window.onload = tableFormHandler;
