const employee = {
    name : 'sam',
    streetAddress : '11 Broadway'
}

function  updateEmployeeWithKeyAndValue(employee, key, value) {
   const employee2 = {...employee}
   employee2[ key ]= value
   return employee2
}
   
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const employee3 = employee
    employee3[key] = value
    return employee3
}

function deleteFromEmployeeByKey(employee, key) {
    const employee4 = {...employee}
    delete employee4[key]
    return employee4
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const employee4 = employee;
    delete employee4[key] // delete employee[key] can work also
    return employee4
}