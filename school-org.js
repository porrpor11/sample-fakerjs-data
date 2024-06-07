import {faker, fakerTH} from "@faker-js/faker";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

// Load and parse the JSON data
const rawData = fs.readFileSync('./school-org.json');
const schoolStructure = JSON.parse(rawData);


function generateTeacher(position, number) 
{
    let teachers = [];
    for (let i = 0; i < number; i++) {
      teachers.push({
        position: position,
        firstname: faker.person.firstName(),
        lastname: fakerTH.person.lastName(),
      });
    }
    return teachers;
}
  

  function generateStructure(structure, parentPosition = '') 
{
    let result = [];
    for (let position in structure) {
        if (position === 'number') continue;
        let fullPosition = parentPosition ? `${parentPosition} -> ${position}` : position;
        let number = structure[position].number || 0;
        result = result.concat(generateTeacher(fullPosition, number));
        let subStructure = generateStructure(structure[position], fullPosition);
        result = result.concat(subStructure);
    }
    return result;
}
  

let generatedTeachers = generateStructure(schoolStructure);
  
console.log(generatedTeachers);


var obj = generatedTeachers;

var json = JSON.stringify(obj);


fs.writeFile('school-teachers-data.json', json, function (err) {
  if (err) throw err;
  console.log('Saved!');
});