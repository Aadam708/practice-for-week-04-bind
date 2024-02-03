// Your code here
const Employee = require(`./employee`);

const e1 = new Employee('john wick', 'dog walker');

const occ = e1.sayOccupation.bind(e1);

global.setTimeout(occ,3000);
