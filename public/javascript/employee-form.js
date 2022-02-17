const newEmployeeFormHandler = async (event) => {
  event.preventDefault();

  const qaSupervisor = document.querySelector(`#qaSupervInput`).value.trim();
  const qaAgent = document.querySelector(`#qaAgentInput`).value.trim();
  const employeeSupervisor = querySelector(`#supervisorInput`).value.trim();
  const firstName = document.querySelector(`#firstNameInput`).value.trim();
  const lastName = document.querySelector(`#lastNameInput`).value.trim();
  const employeeId = document.querySelector(`#empIdInput`).value.trim();
  const role = document.querySelector(`#roleInput`).value.trim();
  const workSite = document.querySelector(`#workSiteInput`).value.trim();
  const language = document.querySelector(`#languageInput`).value.trim();
  const email = document.querySelector(`#emailInput`).value.trim();

  if (
    qaSupervisor &&
    qaAgent &&
    employeeSupervisor &&
    firstName &&
    lastName &&
    employeeId &&
    role &&
    workSite &&
    language &&
    email
  ) {
    const response = await fetch(``);
  }
};
