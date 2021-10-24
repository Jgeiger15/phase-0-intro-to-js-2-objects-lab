// Write your solution in this file!
const employee = {
    name: "Ken",
    streetAddress: "123 Main St.",
  };

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  const newObject = {name: "Sam", streetAddress: "11 Broadway",};
  return newObject

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
  employee.name = "Sam";
  employee.streetAddress ="12 Broadway";
  return employee
}


function deleteFromEmployeeByKey() {
  const newNewObject = { streetAddress: "11 Broadway",};
  return newNewObject
    
}

function destructivelyDeleteFromEmployeeByKey() {
  delete employee.name;
  return employee;

}