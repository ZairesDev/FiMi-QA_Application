const addEmployeeFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector(`#firstNameInput`).value.trim();
  const lastName = document.querySelector(`#lastNameInput`).value.trim();
  const employeeNumber = document.querySelector(`#empNumberInput`).value.trim();
  const site = document.querySelector(`#workSiteInput`).value.trim();
  const role = document.querySelector(`#roleInput`).value.trim();
  const language = document.querySelector(`#languageInput`).value.trim();
  const group = document.querySelector(`#groupInput`).value.trim();
  const employeeSupervisor = querySelector(`#supervisorInput`).value.trim();
  const qaAgent = document.querySelector(`#qaAgentInput`).value.trim();

  if (
    firstName &&
    lastName &&
    employeeNumber &&
    site &&
    role &&
    language &&
    group &&
    employeeSupervisor &&
    qaAgent
  ) {
    const response = await fetch(`./form`, {
      method: `post`,
      body: JSON.stringify({
        firstName,
        lastName,
        employeeNumber,
        site,
        role,
        language,
        group,
        employeeSupervisor,
        qaAgent,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response) {
      console.log(`success!`);
    } else {
      alert(response.statusText);
    }
  }
};

const updateEmployee = async (event) => {
  event.preventDefault();
};

document
  .querySelector(`.add-button`)
  .addEventListener(`submit`, addEmployeeFormHandler);
