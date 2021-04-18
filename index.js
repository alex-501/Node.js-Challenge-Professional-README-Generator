//modules required

let inquirer = require('inquirer');
let fs = require('fs');

inquirer.prompt ( [
    {

            type: "input",
            message: "Type: Project Title?",
            name: "title"
        
        
        },
        
        
        {
            type: "input",
            message: "Type: Description of Project",
            name: "description"
        },


        {
            type: "input",
            message: "Type: Installation Instructions",
            name: "install"
        },


        {
            type: "input",
            message: "Type: names of those who contributed:",
            name: "contribution"
        },


        {
            type: "input",
            message: "Type: how project testing works:",
            name: "testing"
        },
        {
            type: "input",
            message: "Type: GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "email address:",
            name: "email"
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [

                "N/A",
                "MIT License",
                 "Mozilla Public License 1.1 )",
               
            ]
        }
    ])
    .then((res) => {
        console.log("Creating README file...");
        createREADMEFile(res);
        
    })
    .catch((err) => {
        console.log(err);
    })
    /////////////////////////////////////////////////////////////
//create readme!!
function createREADMEFile (input) 
{
    let  readmeTitle; 
     let readmeDescription;
 const descriptionHead = "## Description";
 // so, const ##(name) then head, for title or header i presume
  let tableOfContents; 
   const tocHead = "## Table of Contents";
    let installArr;
 const installHead = "## Installation";
 
 let readmeContribution;
const contributionHead = "## Contribution";
   
//input license!
    let readmeLicence = input.license;
    const licenseHead = "## License";
    
    let readmeQuestions;
    const questionsHead = "## Questions";
   
    let completeREADME = [];
    
    // ##Title
    if (input.title == '') {
        readmeTitle = '# TITLE';
     } else  {
        
        readmeTitle = `# ${input.title}`;

        
        }
        completeREADME.push(readmeTitle);
    
    
    




    ///////////////////////////////////
    //## description
    if (input.description == '') {
        readmeDescription = `${descriptionHead}\n Enter project description here.`;
    } else {
        readmeDescription = `${descriptionHead}\n${input.description}`;
    }
    completeREADME.push(readmeDescription);
    ////link ALL ## titles to readme and how they go
    
    //How to add ##Table of Contents
    tableOfContents=  ` ${tocHead}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`;
    completeREADME.push(tableOfContents);
    
    
    //push - links to ## installation
    completeREADME.push(`${installHead}`);
    //
    installArr = input.install.split(',').map(item => {
        return `${item.trim()}`;
    });
    
    for (var i = 0; i < installArr.length; i++) {
        completeREADME.push(`${i + 1}. ${installArr[i]}`);
    }
    
    
    //Adding Usage
    if (input.usage == '') {
        readmeUsage = `\n${usageHead}\n Enter project usage here.`;
    } else {
        readmeUsage = `\n${usageHead}\n${input.usage}`;
    }
    completeREADME.push(readmeUsage);
    
    
    //Adding Contributing
    if (input.contribution == '') {
        readmeContribution = `\n${contributionHead}\n Enter project contriburtion information here.`;
    } else {
        readmeContribution = `\n${contributionHead}\n${input.contribution}`;
    }
    completeREADME.push(readmeContribution);
    
    
    //Adding Tests
    if (input.testing == '') {
        readmeTest = `\n${testingHead}\n Enter project testing information here.`;
    } else {
        readmeTest = `\n${testingHead}\n${input.testing}`;
    }
    completeREADME.push(readmeTest);
    
    
    //License 
    readmeLicence = `\n${licenseHead}\nThis project is convered under the ${input.license}.`;
    completeREADME.push(readmeLicence);
    
    
    //Link to Github with concatenate typing to insert variable words
    readmeQuestions = `\n${questionsHead}\nFor questions about this project, please see my GitHub at [${input.github}](https://github.com/${input.github}), or reach out by email at ${input.email}.`;
    completeREADME.push (readmeQuestions);
    const README = completeREADME.join ('\n')  ;
        
    
    //fs function to create/ edit README
    fs.writeFile("./example/README-example.md", README, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("README file successfully created!");
        }
    });
}