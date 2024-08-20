import { PatientNames } from "./PatientNames.js";
import { EmployeeNames } from "./EmployeeNames.js";
import { Departments } from "./Departments.js";
import { Medicines } from "./Medicines.js";
import { Hospital } from "./Hospital.js";
import { Appointments } from "./Appointments.js";
import { PatientEmployee } from "./PatientEmployee.js";
import { PatientRecords } from "./PatientRecords.js";

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

//Departments
const neurology = new Departments("Neurology", "Building A, floor 2, room 234");
const cardiology = new Departments(
  "Cardiology",
  "Building B, floor 1, room 101"
);

//Pivot Table
const pivot1 = new PatientEmployee(Alex, Doctor);
pivot1.getInfo();

//Medicine
const crosine = new Medicines("Crosine", "Headache");

//Hospital Information
const cityHospital = new Hospital("Amar Hospital");
cityHospital.addDepartment(neurology);
cityHospital.addDepartment(cardiology);
cityHospital.addPatient(Alex);
cityHospital.addPatient(patient1);
cityHospital.addEmployee(Doctor);
cityHospital.addEmployee(doctor1);
cityHospital.getHospitalInfo();

//Record Info.
const records = new PatientRecords(
  Alex,
  Doctor,
  cardiology,
  firstApp,
  crosine,
  cityHospital
);

records.getPatientRecords();
