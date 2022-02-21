[![License: MIT](https://img.shields.io/static/v1?label=license&message=MIT&color=green)](https://opensource.org/licenses/MIT)

# Quality Assurance Demands Quality: FiMi QA Employee Management

## Summary

- We know the importance of employee tracking to QA department. We’re here to give a simple solution to such a tedious task.

## Usage

- Easily track all monitored employees,
- Assign and edit QA to frontline staff relationships,
- Employee database driven allowing for automatic new hire and attrition updates,
- Reduces manual input and editing,
- Reduces time spent on data entry

## Testing

Use one of the following to login into application:

- QA Agent login information for testing:
  username: sam123,
  password: password: cats123

- QA Supervisor login information for testing:
  username: chair123,
  password: rosa123,

## User Story

- AS A QA Supervisor,
- I WANT to assign Customer Care Representative (CRSs) agents and Escalated Unit (EUs) agents to Quality Assurance (QA) staff in a table format so that QA can see -who they must audit.
- AS A QA Supervisor,
- I WANT to have the ability to edit QA and agent assignment tables and I don’t want QA staff to have the ability to edit the assignment tables.
- AS A QA staff member,
- I WANT to view my assigned call center staff which includes their names, email, role, department, supervisor, language, and other details so that I know who to audit for the week.
- AS A QA Supervisor,
- I WANT the ability to export the QA assignments to an Excel spreadsheet so that I can share this report with the departments that don’t have access to the FiMI application such as the workforce department who need to be aware of assignments for scheduling.

## Requirements

- GIVEN a data entry and employee roster management site
- WHEN I visit the site as a QA employee for the first time
- THEN I am presented with the homepage, navigation links for the homepage, and the option to log in
- WHEN I choose to sign up
- WHEN I choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the QA roster dashboard, a work reminder from the QA Supervisor in the body of the homepage, the QA Edit page (if I am a QA supervisor), and the option to log out.
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with a work reminder from the QA Supervisor and links to sign out, the QA roster dashboard and the Edit QA Roster page if I am a QA supervisor.
- WHEN I click on the QA roster dashboard as a QA agent then I can view my assigned employees’ details and the count of employees I have assigned when I filter by my name.
- WHEN I click on the QA roster dashboard as a QA Supervisor I can view the employee assignments.
- WHEN I click on the Edit QA Roster page as a QA Supervisor, I can edit the QA to employee assignments, employee roles, and groups.
- WHEN I am done editing the QA Roster as a QA Supervisor I can automatically see the updated assignments
- WHEN I am done editing the QA Roster for the week as a QA Supervisor I can choose to export the roster to an Excel spreadsheet so I can share with other departments.
- WHEN I as a QA Supervisor or agent click on “signout” I am logged out of the application and taken back to the login page.

![screenshot of edit screen](/images/editemp.jpeg)

![screenshot of full QA roster](/images/spreadsheet.jpeg)

![screenshot of export](/images/export.jpeg)

![screenshot of search screen](/images/search.jpeg)

## Link to Heroku Deployed Application

- https://mighty-reef-11767.herokuapp.com/

### Technologies Used

- JavaScript
- Node.js
- NPM
- Express.js
- Dotenv
- Nodemailer
- Socket.io
- Sequelize
- MySql
- Bcrypt
- Bulma
- Sheets.js

### Contributors

- [Faissal](https://github.com/Jiryeah)
- [Michelle](https://github.com/MichValenz)
- [Micheal](https://github.com/94r0372189547389)
