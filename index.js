const employee = {
    name: "Sam",
    age:47,
    address: {
        street: "Bolliverde",
        city: "Nairobi",
        state: "Kenya",
    },
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const newObj = { ...employee };

  newObj[key] = value;

  return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
   let newEmployee ={...employee};
   delete newEmployee[key];
   return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
