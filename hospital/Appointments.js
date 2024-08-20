export class Appointments {
  constructor(patient, app_date, reason, employee, cost) {
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
