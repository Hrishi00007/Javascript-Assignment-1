export class Users {
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
