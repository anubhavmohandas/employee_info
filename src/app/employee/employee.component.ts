import { Component } from '@angular/core';
export interface Employee {
  employee_id: number;
  name: string;
  email: string;
  phoneNo: string;
  salary: number;
  jobTitle: string;
  dateOfJoining: Date;
  dateOfBirth: Date;
  address: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})

export class EmployeeComponent {

  searchit:string = ''

  employees: Employee[] = [

  ]
}
