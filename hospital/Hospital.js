export class Hospital {
  constructor(name) {
    this.name = name;
    this.departments = [];
    this.patients = [];
    this.employees = [];
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  addPatient(patient) {
    this.patients.push(patient);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getHospitalInfo() {
    console.log(`Hospital Name is ${this.name}`);
    console.log("Departments => ");
    this.departments.forEach((dept) => dept.getDept());
    console.log("Patients => ");
    this.patients.forEach((patient) => patient.getInfo());
    console.log("Employees => ");
    this.employees.forEach((employee) => employee.getInfo());
  }
}
