export class Medicines {
  constructor(medicine_name, cause) {
    this.medicine_name = medicine_name;
    this.cause = cause;
  }

  prescribeMedicine(cause) {
    console.log(`The medicine for ${cause} is ${this.medicine_name}`);
  }
}
