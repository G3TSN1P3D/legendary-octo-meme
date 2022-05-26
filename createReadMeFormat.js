
function createReadMeFormat(data) {
    return `
    # ${data.title}

    ## Description
    
    ${data.description}

    - ${data.motivation}
    - ${data.why}
    - ${data.problem}
    - ${data.learnt}
        
    ## Table of Content 

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.use}
    
    ## Credits
    
    ${data.collaborators}
    
    ## License
    
    ${data.license}
        
    ## Features
    
    ${data.features}
    
    ## How to Contribute
    
    [legendary-octo-meme](https://github.com/G3TSN1P3D/legendary-octo-meme)
    
    `
}

module.exports = createReadMeFormat;