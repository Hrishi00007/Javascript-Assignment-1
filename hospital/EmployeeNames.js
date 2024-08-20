import { Users } from "./User.js";

export class EmployeeNames extends Users {
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
