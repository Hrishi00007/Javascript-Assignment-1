export class Departments {
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
