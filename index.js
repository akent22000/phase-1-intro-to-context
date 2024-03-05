// Your code here

// populates a record from an Array
// createEmployeeRecord
//   ✓ initializes a field, timeInEvents, to hold an empty Array
//   ✓ initializes a field, timeOutEvents, to hold an empty Array
// process an Array of Arrays into an Array of employee records
// ✓ has a function called createEmployeeRecords
// createEmployeeRecords

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }

//   createTimeInEvent
//     2) creates the correct type
//     3) extracts the correct date
//     4) extracts the correct hour

  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      date,
      hour: parseInt(hour, 10),
    });
    return employee;
  }
  

//   createTimeOutEvent
//   ✓ creates the correct type
//   ✓ extracts the correct date
//   ✓ extracts the correct hour
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour: parseInt(hour, 10),
    });
    return employee;
  }
  
  // Helper function to calculate hours worked on a specific date
  function hoursWorkedOnDate(employee, date) {
    const timeInEvent = employee.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find((event) => event.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map((event) => event.date);
    return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employee, date), 0);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
