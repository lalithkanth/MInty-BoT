const fs = require('fs');
let flag = 1;


   function getFlag () {
    console.log("getflag value");
    // Read the contents of sample.js synchronously
    const fileContent = fs.readFileSync('./public/sample.js', 'utf8');

    // Extract the value of flag from the fileContent
    const regex = /const flag = (.*);/;
    const match = fileContent.match(regex);

    if (match && match[1]) {
        const flagValue = JSON.parse(match[1]);
        console.log(flagValue);
        return flagValue;
    } else {
        console.error('Failed to read flag value from sample.js');
        return null;
    }
  }
   function setFlag (value) {
    console.log("setflag value:");
    flag = value;
    console.log(flag);

    // Write the flag value to the sample.js file
    fs.writeFile('./public/sample.js', `const flag = ${JSON.stringify(flag)};`, (err) => {
        if (err) {
            console.error('Error writing to sample.js:', err);
        } else {
            console.log('Flag value has been stored in sample.js');
        }
    });
  }
  module.exports = {
    setFlag: setFlag,
    getFlag: getFlag
  };