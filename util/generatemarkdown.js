

function generateReadme( answers ) 
{ return `


<h1 align="center">${answers.projectTitle} </h1>
  

## Table of Contents
- [Description] (#description)
- [Installation] (#installation)
-- [Contributing] (#contributing)
- [License] (#license)
- [Questions] (#questions)


## Installation
 ${answers.installation}

# Usage
 ${answers.usage}

# License

${answers.license} <br><br />
# Contributers


 ${answers.contributing}
# Test


 ${answers.tests}
# Questions
 ${answers.questions}<br />
<br />
 GitHub Link: [${answers.username}](https://github.com/${answers.username})<br /> <br />
✉️ Email me with any questions: ${answers.email}<br /><br />

`;
  }
  //module export here


  module.exports = generateReadme;