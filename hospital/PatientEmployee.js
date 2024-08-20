export class PatientEmployee {
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
