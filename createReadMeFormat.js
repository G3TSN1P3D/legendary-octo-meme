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
- [Features](#features)
- [How to Contribute](#contribute)

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

[${data.title}](https://github.com/G3TSN1P3D/${data.title})

`;
}

module.exports = createReadMeFormat;
