create table PatientNames(
	patient_names_id serial primary key,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	gender char(1) not null,
	address varchar(255) not null,
	email varchar(100) not null,
	dob date not null,
	phone_number varchar(30) not null,
	patient_id int
);


create table EmployeeNames(
	employee_names_id serial primary key,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	gender char(1) not null,
	address varchar(255) not null,
	email varchar(100) not null,
	dob date not null,
	phone_number varchar(30) not null,
	dept varchar(50),
	patient_id integer
);

create table Appointments(
	app_id serial primary key,
	app_date timestamp not null,
	reason text
);

create table Departments(
	dept_id serial primary key,
	dept_name varchar(50) not null,
	dept_location varchar(50) not null,
	emp_id integer
);

create table Medicines(
	medicine_id serial primary key,
	medicine_name varchar(50) not null,
	cause text
);


create table PatientEmployee(
	pe_id serial primary key,
	patient_names varchar(50),
	patient_names_id int,
	employee_names_id int,
	foreign key (patient_names_id) references PatientNames(patient_names_id),
	foreign key (employee_names_id) references EmployeeNames(employee_names_id)
)
	
create table PatientRecords(
	record_id serial primary key,
	patient_names_id integer,
	employee_names_id integer,
	app_id integer,
	dept_id integer,
	medicine_id integer,
	foreign key(patient_names_id) references PatientNames(patient_names_id),
	foreign key(employee_names_id) references EmployeeNames(employee_names_id),
	foreign key(app_id) references Appointments(app_id),
	foreign key(dept_id) references Departments(dept_id),
	foreign key(medicine_id) references Medicines(medicine_id)
)
