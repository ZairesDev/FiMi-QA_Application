# Quality Assurance Demands Quality!

## Summary

- It can be very expensive to license out software to expedite the management system within a business. With Quality Assurance, this is abundantly true. This application, will allow the business to streamline the process, all the while saving the company a substantial amount of money.

## User Story

- AS A QA Supervisor,
- I WANT to assign Customer Care Representative (CRSs) agents and Escalated Unit (EUs) agents to Quality Assurance (QA) staff in a table format so that QA can see -who they must audit.
- AS A QA Supervisor,
- I WANT to have the ability to edit QA and agent assignment tables and I don’t want QA staff to have the ability to edit the assignment tables.
- AS A QA staff member,
- I WANT to view my assigned call center staff which includes their names, email, role, department, supervisor, language, and other details so that I know who to audit for the week.
- As A QA staff member,
- I WANT to view a count of the number of employees I have assigned so that I know my workload for the week.
- AS A QA Supervisor,
- I WANT to be able to view the count of employees each QA staff member has assigned so that I can ensure workload distribution is fair.
- AS A QA Supervisor,
- I WANT the ability to export the QA assignments to an Excel spreadsheet so that I can share this report with the departments that don’t have access to the FiMI application such as the workforce department who need to be aware of assignments for scheduling.

## Requirements

- GIVEN a data entry and employee roster management site
- WHEN I visit the site as a QA employee for the first time
- THEN I am presented with the homepage, navigation links for the homepage, and the option to log in or sign up.
- WHEN I choose to sign up
- THEN I am prompted to create a username and password, to enter my email address, and asked to choose my role (QA Agent or QA Supervisor) from a dropdown.
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the QA roster dashboard, a work reminder from the QA Supervisor in the body of the homepage, the QA Edit page (if I am a QA supervisor), and the option to log out.
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with a work reminder from the QA Supervisor and links to sign out, the QA roster dashboard and the Edit QA Roster page if I am a QA supervisor.
- WHEN I click on the QA roster dashboard as a QA agent then I can view my assigned employees’ details and the count of employees I have assigned when I filter by my name.
- WHEN I click on the QA roster dashboard as a QA Supervisor I can view the employee assignments and counts.
- WHEN I click on the Edit QA Roster page as a QA Supervisor, I can edit the QA to employee assignments, employee roles, and groups.
- WHEN I am done editing the QA Roster as a QA Supervisor I can automatically see the updated assignments and counts in the QA Roster page.
- WHEN I am done editing the QA Roster for the week as a QA Supervisor I can choose to export the roster to an Excel spreadsheet so I can share with other departments.
- WHEN I as a QA Supervisor or agent click on “signout” I am logged out of the application and taken back to the login page.

### Wireframe

- <img width="1024" alt="Screen Shot 2022-02-08 at 8 01 47 PM" src="https://user-images.githubusercontent.com/92201576/153107725-41f362da-b415-4a70-b895-23d1b2a18e42.png">

- <img width="1024" alt="Screen Shot 2022-02-08 at 8 02 42 PM" src="https://user-images.githubusercontent.com/92201576/153107878-83515ddd-cf2a-40a8-9d4c-cb66d7c9e146.png">

- <img width="1027" alt="Screen Shot 2022-02-08 at 7 58 59 PM" src="https://user-images.githubusercontent.com/92201576/153107475-2a8d0753-16ba-4bad-be9f-f698ffc5c914.png">

- <img width="1027" alt="Screen Shot 2022-02-08 at 8 04 40 PM" src="https://user-images.githubusercontent.com/92201576/153108001-ceaf059d-65ec-43b9-a40a-0fa142b79fc1.png">

- <img width="1023" alt="Screen Shot 2022-02-08 at 8 04 53 PM" src="https://user-images.githubusercontent.com/92201576/153108032-732f1dbb-c8fd-40f5-8e88-da22d6b92bef.png">

## Link to Heroku Deployed Application

- lorem

### Technoligies Used

- JavaScript
- Node.js
- NPM
- Nodemailer
- Socket.io
- Sequelize
- MySql

### Contributors

- Faissal
- Michelle
- Micheal
