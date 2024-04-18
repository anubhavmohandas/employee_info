import { Component } from '@angular/core';
export interface employee{
  employeeId: number;
  name: string;
  email: string;
  phone: number;
  Job_Title: string;
  doj: string;
  dob: string;
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

}
