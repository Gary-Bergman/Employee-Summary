# Employee Summary
  
  
   ## Demo/Link

   <img src="Assets/Images/Employee Summary.png" alt="Employee Summary Screenshot" width="700">


  [MP4 Demo](https://drive.google.com/file/d/1XZX3fj0D5qGG0zba8o3etcx8bP6Bgw6W/view)
  
  ## Description

  In this project I built a team generator command line application that prompts the user for information about employees on a team - the team manager, a number of engineers, and a number of interns - and creates an HTML file that displays a nicely formatted team roster based on the information provided by the user. This program passes a number of tests written in the "test" folder, and can be accessed by running a test command using CLI (see Tests section below). The user can input any number of team members, and they may be a mix of engineers and interns. 

  This project uses the recursion method to continually prompt the user to enter more team members until the user selects to stop entering members - in which case the function housing the recursion is no longer called. The CLI runs based on the inquirer dependency with a number of prompts listed to retrieve information about each employee. I used classes and constructors to return information about each type of employee, and linked multiple files using module.exports and requires. I also added validators to each prompt question so the user is required to fill out the information in an particular format. 

  ## Table of Contents

  *  [Demo/Link](#Demo/Link)
   
  *  [Description](#Description)

  *  [Installation](#Installation)
  
  *  [License](#License)

  *  [Tests](#Tests)

  *  [Questions](#Questions)
  

  ## Installation

  To install necessary dependencies, run the following command:

 
    npm i


  ## License
  
  This project did not use a license.

  ## Tests

  To run tests, run the following command:

    npm run test

  ## Questions

  If you have any questions about this repo, open an issue or contact me directly at [garybergman00@gmail.com](mailto:garybergman00@gmail.com). You can find more of my work at [Gary-Bergman](https://github.com/Gary-Bergman).
  