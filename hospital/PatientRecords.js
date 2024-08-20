export class PatientRecords {
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
