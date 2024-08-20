class Users {
  constructor(
    patient_names_id,
    employee_names_id,
    first_name,
    last_name,
    age,
    dob,
    address,
    phone_number,
    email
  ) {
    this.patient_names_id = patient_names_id;
    this.employee_names_id = employee_names_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.dob = dob;
    this.address = address;
    this.phone_number = phone_number;
    this.email = email;
  }

  getInfo() {
    console.log("You have to define your own getInfo first 💀");
  }
}

class PatientNames extends Users {
  constructor(
    patient_names_id,
    first_name,
    last_name,
    age,
    dob,
    address,
    phone_number,
    email
  ) {
    super(
      patient_names_id,
      null,
      first_name,
      last_name,
      age,
      dob,
      address,
      phone_number,
      email
    );
  }

  getInfo() {
    console.log(
      `Hello, I am a patient and my name is ${this.first_name} ${this.last_name}. I am ${this.age} years old. I live at ${this.address}. You can reach out to me on my mobile number ${this.phone_number} or on my email ${this.email}.`
    );
  }
}

class EmployeeNames extends Users {
  constructor(
    employee_names_id,
    first_name,
    last_name,
    age,
    dob,
    address,
    phone_number,
    email
  ) {
    super(
      null,
      employee_names_id,
      first_name,
      last_name,
      age,
      dob,
      address,
      phone_number,
      email
    );
  }

  getInfo() {
    console.log(
      `Hello, I am an employee and my name is ${this.first_name} ${this.last_name}. I am ${this.age} years old. I live at ${this.address}. You can reach out to me on my mobile number ${this.phone_number} or on my email ${this.email}.`
    );
  }
}

class Departments {
  constructor(dept_name, dept_location) {
    this.dept_name = dept_name;
    this.dept_location = dept_location;
  }

  getDept() {
    console.log(
      `The name of the department is ${this.dept_name} and it is located at ${this.dept_location}`
    );
  }
}

class Medicines {
  constructor(medicine_name, cause) {
    this.medicine_name = medicine_name;
    this.cause = cause;
  }

  prescribeMedicine(cause) {
    console.log(`The medicine for ${cause} is ${this.medicine_name}`);
  }
}

class Hospital {
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

class Appointments {
  constructor(patient, app_date, reason, employee, cost) {
    // constructor(patient_names_id, app_date, reason, handled_by, cost) {
    this.patient = patient;
    this.app_date = app_date;
    this.reason = reason;
    this.employee = employee;
    this.cost = cost;
  }

  static createAppointment(patient, app_date, reason, employee, cost) {
    return new Appointments(
      patient.first_name,
      app_date,
      reason,
      employee.first_name,
      cost
    );
  }

  appointmentDetails() {
    console.log(
      `The appointment of Patient ${this.patient.first_name} on ${this.app_date} for ${this.reason} is handled by Dr.${this.employee.first_name}`
    );
    console.log(`The cost of this appointment will be ${this.cost}`);
  }
}

class PatientEmployee {
  constructor(patient, employee) {
    this.patient = patient;
    this.employee = employee;
  }

  getInfo() {
    console.log(
      `The patient ${this.patient.first_name} ${this.patient.last_name} (ID: ${this.patient.patient_names_id}) is associated with employee ${this.employee.first_name} ${this.employee.last_name} (ID: ${this.employee.employee_names_id})`
    );
  }
}

class Patientrecords {
  constructor(patient, employee, department, appointment, medicine, hospital) {
    this.patient = patient;
    this.employee = employee;
    this.department = department;
    this.appointment = appointment;
    this.medicine = medicine;
    this.hospital = hospital;
  }
  getPatientRecords() {
    console.log(
      `The patient ${this.patient.first_name} was admitted in to hospital ${this.hospital.name} with appointment scheduled on ${this.appointment.app_date} and was handled by ${this.employee.first_name} was kept inside ${this.department.dept_name} and was prescribed ${this.medicine.medicine_name} for cause of ${this.medicine.cause}`
    );
  }
}

//---------------------------------------------------------------------------
// Testing

//patients
const Alex = new PatientNames(
  1,
  "Alex",
  "Doe",
  24,
  "22-09-2002",
  "121, Rolls street",
  "256375647",
  "alexdoe@example.com"
);

Alex.getInfo();
const patient1 = new PatientNames(
  2,
  "Jane",
  "Smith",
  30,
  "14-05-1994",
  "532, Palm street",
  "897654321",
  "janesmith@example.com"
);
//-----------------------------------------------------
//Employees
const Doctor = new EmployeeNames(
  1,
  "Josh",
  "Gates",
  34,
  "23-4-1989",
  "351, Bulls street",
  "55362746",
  "joshgates007@example.com"
);

Doctor.getInfo();
const doctor1 = new EmployeeNames(
  2,
  "Emily",
  "Stone",
  28,
  "12-11-1995",
  "784, Pine street",
  "765432198",
  "emilystone@example.com"
);
//----------------------------------------------------------

//Appointments
const firstApp = Appointments.createAppointment(
  Alex,
  "14-08-2024",
  "Routine Checkup",
  Doctor,
  100
);

firstApp.appointmentDetails();

const first = new Appointments(
  Alex,
  "12-08-2024",
  "Routine Checkup",
  Doctor,
  100
);

first.appointmentDetails();

const Second = new Appointments(
  patient1,
  "12-08-2002",
  "Ulcer Checkup",
  doctor1,
  1000
);
Second.appointmentDetails();

//---------------------------------------------------

//Departments
const neurology = new Departments("Neurology", "Building A, floor 2, room 234");
const cardiology = new Departments(
  "Cardiology",
  "Building B, floor 1, room 101"
);
//----------------------------------------------------
//Pivot Table
const pivot1 = new PatientEmployee(Alex, Doctor);
pivot1.getInfo();

//--------------------------------------------------------
//Medicine
const crosine = new Medicines("Crosine", "Headache");
pivot1.getInfo();

//-------------------------------------------------------------

//Hospital Information
const cityHospital = new Hospital("Amar Hospital");
cityHospital.addDepartment(neurology);
cityHospital.addDepartment(cardiology);
cityHospital.addPatient(Alex);
cityHospital.addPatient(patient1);
cityHospital.addEmployee(Doctor);
cityHospital.addEmployee(doctor1);
cityHospital.getHospitalInfo();

//--------------------------------------------------------

//Record Info.
const records = new Patientrecords(
  Alex,
  Doctor,
  cardiology,
  firstApp,
  crosine,
  cityHospital
);

records.getPatientRecords();
